import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Root } from 'react-dom/client';
import type { RootState } from '../../app/store'

const LOWERCASE: string = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS: string = '1234567890';
const SPECIAL: string = `!"#$%&'()*+,-./:;<=>?@[}^_{|}~`;

interface FormState {
    length: string
    lowercase: boolean
    uppercase: boolean
    numbers: boolean
    special: boolean
    availChars: string
    password: string
}

const initialState: FormState = {
    length: '20',
    lowercase: false,
    uppercase: false,
    numbers: false,
    special: false,
    availChars: '',
    password: 'p@s$w0rD'
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        toggleLowercase: state => {
            state.lowercase = !state.lowercase
        },
        toggleUppercase: state => {
            state.uppercase = !state.uppercase
        },
        toggleNumbers: state => {
            state.numbers = !state.numbers
        },
        toggleSpecial: state => {
            state.special = !state.special
        },
        updateLength: (state, action: PayloadAction<string>) => {
            state.length = action.payload
        },
        resetChars: state => {
            state.availChars = ''
        },
        updateChars: (state, action: PayloadAction<string>) => {
            state.availChars += action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    }
})

export const { toggleLowercase, toggleUppercase, toggleNumbers, toggleSpecial, updateLength, resetChars, updateChars, setPassword } = formSlice.actions
export const getFormValues = (state: RootState) => state.form
export default formSlice.reducer


 