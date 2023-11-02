import {createSlice} from '@reduxjs/toolkit'

export const adoptPet = createSlice(
  {
    name:"adoptPet",
    initialState: {
      value: null 
    }, 
    reducers: {
      adopt: (state, action) => {
        state.value = action.payload ; 
      }
    }
  }
)

export const  {adopt} = adoptPet.actions ;  

export default adoptPet.reducer ; 