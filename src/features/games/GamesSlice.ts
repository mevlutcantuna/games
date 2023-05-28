import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface initialStateType {
    searchValue: string
}

const initialState: initialStateType = {
    searchValue: "",
}

export const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
    },
})

export const { setSearchValue } = gameSlice.actions

export const selectSearchValue = (state: RootState) => state.games.searchValue

export default gameSlice.reducer
