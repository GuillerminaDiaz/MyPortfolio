import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IPreference{
    lenguage: string,
    mode: string,
    currentPage: string
}
const initialState: IPreference = {
    lenguage: 'english',
    mode: 'light',
    currentPage: 'home'
}

export const preferenceSlice= createSlice({
    name: 'preferenceSlice',
    initialState,
    reducers:{
        changeLenguage(state, action: PayloadAction<string>){
            return{
                ...state,
                lenguage: action.payload
            }
        },    
        changeMode(state, action: PayloadAction<string>){
            return{
                ...state,
                mode: action.payload
            }
        },
        current(state, action: PayloadAction<string>){
            return{
                ...state,
                currentPage: action.payload
            }
        }
    }
})

export const {changeLenguage, changeMode, current} = preferenceSlice.actions; 