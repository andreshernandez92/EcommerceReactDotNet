// paymentSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configStore";
import { Payments } from "../../app/models/payments";
interface PaymentState {
    payments: Payments[] | null,
    status: string
}

const initialState: PaymentState = {
  payments: null,
  status: 'idle'
};

export const getPaymentAsync = createAsyncThunk<Payments[]>(
  "payment/getpayments",
  async (_,thunkAPI) => {
    try {
      const response = await agent.Payments.getPayments();
      console.log(response.data)
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setPaymentData: (state,action) => {
      
      state.payments = action.payload
      
     
  },
  clearPaymentData: (state) => {
      state.payments= null;
  } 
  },
  extraReducers: (builder) => {
    builder.addCase(getPaymentAsync.fulfilled, (state, action) => {
      state.payments = action.payload;
    });
    builder.addCase(getPaymentAsync.pending, (state, action) => {
      state.status = 'Acquiring Payments';
    });
    builder.addCase(getPaymentAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'idle';
    });
  },
});

export const { clearPaymentData, setPaymentData } = paymentSlice.actions;




