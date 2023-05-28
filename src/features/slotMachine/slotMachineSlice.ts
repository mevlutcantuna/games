import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState = {
    name: "can tuna",
}

const slotMachineSlice = createSlice({
    name: "slotMachine",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
    },
})

export const { setName } = slotMachineSlice.actions

export const selectName = (state: RootState) => state.slotMachine.name

export default slotMachineSlice.reducer
