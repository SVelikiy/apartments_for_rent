import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://apartments-for-rent.onrender.com";

// export const fetchAllApartments = createAsyncThunk(
//   "apartments/getAll",
//   async (__, thunkApi) => {
//     try {
//       const res = await axios.get("/apartments");
//       return res.data.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

export const deleteApartment = createAsyncThunk(
  "apartments/deleteApartment",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/apartments/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addApartment = createAsyncThunk(
  "apartments/addApartment",
  async (newApartment, thunkAPI) => {
    try {
      const res = await axios.post("/apartments", newApartment);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchFilteredApartments = createAsyncThunk(
  "apartments/fetchFiltered",
  async ({ page, perPage, sortOrder, sortBy, filter }, thunkAPI) => {
    try {
      const response = await axios.get("/apartments", {
        params: {
          page,
          perPage,
          sortOrder,
          sortBy,
          ...filter,
        },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateApartment = createAsyncThunk(
  "apartments/update",
  async ({ _id, payload, options = {} }, thunkAPI) => {
    try {
      const response = await axios.patch(`/apartments/${_id}`, payload, options);
      return response.data.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
