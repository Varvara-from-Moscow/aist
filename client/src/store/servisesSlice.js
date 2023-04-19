import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../Api'

export const fetchServises = createAsyncThunk(
    'services/fetchServises',

    function getServices(){
      api.getServices({})
        .then(res => {
            /*const data = res.json();
            return data;*/
            return res;
        })
    }  
    
)

const servisesSlice = createSlice({
    name: 'services',

    initialState: {
     servicesData:[],
     status: null,
     error: null,
    },

    reducers:{

    },

    extraReducers: {
      [fetchServises.pending]: (state) => {
        state.status = 'loading';
        state.error = null;
      },
      [fetchServises.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.servicesData = action.payload;
      },
      [fetchServises.rejected]: (state, action) => {},
    },
})

export default servisesSlice.reducer;