import { createSlice } from "@reduxjs/toolkit";
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
      // .addCase(fetchAllApartments.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.items = action.payload.data;
      // })
      .addCase(deleteApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload.data._id
        );
      })
      .addCase(addApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload.data);
      })
      .addCase(fetchFilteredApartments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
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
      });
  },
});

export const apartmentsReducer = slice.reducer;