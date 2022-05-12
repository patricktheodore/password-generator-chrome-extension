import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Root } from 'react-dom/client';
import type { RootState } from '../../app/store'

interface FormState {
    length: string
    availChars: string[]
    password: string
}

const initialState: FormState = {
    length: '20',
    availChars: [],
    password: 'p@s$w0rD'
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateLength: (state, action: PayloadAction<string>) => {
            state.length = action.payload
        },
        resetChars: state => {
            state.availChars = ['']
        },
        updateChars: (state, action: PayloadAction<string>) => {
            if (!state.availChars.includes(action.payload)) {
                state.availChars.push(action.payload);
            } else { 
                state.availChars.splice(state.availChars.indexOf(action.payload))
            }
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    }
})

export const { updateLength, resetChars, updateChars, setPassword } = formSlice.actions
export const getFormValues = (state: RootState) => state.form
export default formSlice.reducer


 