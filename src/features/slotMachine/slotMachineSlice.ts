import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState = {
    coins: 0,
}

const slotMachineSlice = createSlice({
    name: "slotMachine",
    initialState,
    reducers: {
        setCoins: (state, action: PayloadAction<number>) => {
            sessionStorage.setItem("coins", JSON.stringify(action.payload))
            state.coins = action.payload
        },
    },
})

export const { setCoins } = slotMachineSlice.actions

export const selectCoins = (state: RootState) => state.slotMachine.coins

export default slotMachineSlice.reducer
