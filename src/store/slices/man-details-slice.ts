import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailsManItem } from '@/src/screens/details/details-man'


interface DetailsManState {
  details: DetailsManItem[];
}

const initialState: DetailsManState = {
  details: []
};

export const DetailsManSlice = createSlice({
    name: 'detailsMan',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.details = action.payload
        }
    }
})

export const {setDetails} = DetailsManSlice.actions
export default DetailsManSlice.reducer