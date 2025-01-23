import { createSlice } from "@reduxjs/toolkit";
import { fetchAllApartments, deleteApartment} from './operations';

const slice = createSlice({
  name: "apartments",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllApartments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(deleteApartment.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.items = state.items.filter((apartment) => {
          apartment._id !== action.payload.data._id;
        });
      });
  },
});

export const apartmentsReducer = slice.reducer;