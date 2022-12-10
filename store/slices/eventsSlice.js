import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

const fetchEventsByName = createAsyncThunk(
    'events/fetchByName',
    async (name, thunkAPI) => {
        const response = await fetch(`/api/events?populate=*`)
            .then((res) => res.json())
            .then((res) => res.data)

        return response
    }
)

const fetchEventByStatus = createAsyncThunk(
    'events/fetchByStatus',
    async (status, thunkAPI) => {
        const response = await fetch('/api/events?populate=*')
            .then((res) => res.json())
            .then((res) => res.data)

        return response
    }
)

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: []
    },

    reducers: {

    },

    extraReducers: {

    }
})
