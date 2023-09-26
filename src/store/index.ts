import { player } from './slices/player'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'


  export const store = configureStore({
    reducer: {
      player,
    },
  });
  
 
  
  export type RootSate = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch 

  export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
  export const useAppDispatch: () => AppDispatch = useDispatch
  