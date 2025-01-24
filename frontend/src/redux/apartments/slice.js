import { createSlice,isAnyOf } from "@reduxjs/toolkit";
import {
  fetchFilteredApartments,
  deleteApartment,
  addApartment,
  updateApartment
} from "./operations";

const slice = createSlice({
  name: "apartments",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteApartment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload.data._id
        );
      })
      .addCase(addApartment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload.data);
      })
      .addCase(fetchFilteredApartments.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFilteredApartments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(updateApartment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateApartment.fulfilled, (state, action) => {
        state.loading = false;

        const updatedApartment = action.payload;
        const index = state.items.findIndex(
          (item) => item._id === updatedApartment._id
        );
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...updatedApartment };
        }
      })
      .addMatcher(
        isAnyOf(
          deleteApartment.rejected,
          addApartment.rejected,
          fetchFilteredApartments.rejected,
          updateApartment.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );;
  },
});

export const apartmentsReducer = slice.reducer;