import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface UiState {
  loading: boolean;
  modalOpen: boolean;
}
const initialState: UiState = {
  loading: false,
  modalOpen: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
  },
});
export const { setModalOpen } = uiSlice.actions;
export default uiSlice.reducer;
