import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: {
    value: string | null;
  };
}

interface SelectState {
  user: {
    user: {
      value: string | null;
    };
  };
}

const initialState: UserState = {
  user: {
    value: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user.value = action.payload;
    },
    logout: state => {
      localStorage.removeItem("user");
      state.user.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: SelectState) => state.user.user.value;

export default userSlice.reducer;
