import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Classic Drone",
        price: "2000.00",
        description: "Your Classic Drone",
        camera_quality: "4K",
        flight_time: "Approx 20 minutes",
        max_speed: "140 KPH",
        dimensions: "255 x 312 x 127mm",
        weight: "Approx 795g",
        cost_of_prod: "450.00",
        series: "DJI FPV Series"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseDescription: (state,action) => { state.description = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription} = rootSlice.actions;