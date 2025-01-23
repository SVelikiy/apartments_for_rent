import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://apartments-for-rent.onrender.com";

export const fetchAllApartments = createAsyncThunk(
  "apartments/getAll",
  async (__, thunkApi) => {
    try {
      const res = await axios.get("/apartments");
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

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
