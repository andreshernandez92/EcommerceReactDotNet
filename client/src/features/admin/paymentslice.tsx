// paymentSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configStore";
import { Paymentinfo } from "../../app/models/payments";
interface PaymentState {
    paymentData: Paymentinfo | null
}

const initialState: PaymentState = {
  paymentData: null,
};

export const makePaymentAsync = createAsyncThunk(
  "payment/makePayment",
  async (paymentInfo: any, thunkAPI) => {
    try {
      // Make an API call to process the payment
      const response = await agent.Payment.makePayment(paymentInfo);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentData: (state) => {
      state.paymentData = null;
    },
    // Define other reducers as needed
  },
  extraReducers: (builder) => {
    builder.addCase(makePaymentAsync.fulfilled, (state, action) => {
      state.paymentData = action.payload;
    });
    builder.addCase(makePaymentAsync.rejected, (state, action) => {
      // Handle payment failure or error if needed
    });
  },
});

export const { clearPaymentData } = paymentSlice.actions;

export const selectPaymentData = (state: RootState) => state.payment.paymentData;

export default paymentSlice.reducer;
