import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  const res = await fetch("api", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(res);
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(signUpUser.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(signUpUser.fulfilled, (state, {payload:{error,msg}}) => {
      state.loading = false;
      if(error){
        state.error=error
      }else{
        state.msg=msg
      }
    })
    .addCase(signUpUser.rejected, (state, action) => {
      state.loading = true;
    })
  },
});
export default authSlice.reducer;
