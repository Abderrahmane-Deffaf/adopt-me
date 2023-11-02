import {createSlice} from '@reduxjs/toolkit'

const searchParams = createSlice({
  name : 'searchParams', 
  initialState:{
    value: {
      location: "", 
      animal:"", 
      breed: ""
    }
  }, 
  reducers: {
    all: ((state, action)=> {
      state.value = action.payload; 
    })
  }
})

export const {all} = searchParams.actions; 
export default searchParams.reducer ; 