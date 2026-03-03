import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// // ✅ Fetch all companies
export const fetchCompanies = createAsyncThunk(
  "company/fetchCompanies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/companies"); // change URL if needed

      return response.data.data; // directly return companies array
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const companySlice = createSlice({
  name: "company",

  initialState: {
    companies: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload; // only array now
      })

      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default companySlice.reducer;
