import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import slotMachineSlice from "../features/slotMachine/slotMachineSlice"

export const store = configureStore({
    reducer: {
        slotMachine: slotMachineSlice,
    },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
