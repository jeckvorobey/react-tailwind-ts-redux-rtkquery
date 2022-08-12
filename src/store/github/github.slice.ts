import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rgk'

interface GithubState {
	favourites: string[]
}

const initialState: GithubState = {
	favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlise = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(f => f !== action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
		}
	}
})

export const githubActions = githubSlise.actions
export const githubReducer = githubSlise.reducer