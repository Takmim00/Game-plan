import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  const res = await fetch("https://study-hive-server-three.vercel.app/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(res);
  return await res.json();
});

export const logInUser = createAsyncThunk("logInUser", async (body) => {
  const res = await fetch("https://study-hive-server-three.vercel.app/users", {
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
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (build) => {
    // login
    build
      .addCase(logInUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        logInUser.fulfilled,
        (state, { payload: { error, msg, token, user } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            state.msg = msg;
            state.token = token;
            state.user = user;

            localStorage.setItem("msg", msg);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
          }
        }
      )
      .addCase(logInUser.rejected, (state, action) => {
        state.loading = true;
      });
    // signup
    build
      .addCase(signUpUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
