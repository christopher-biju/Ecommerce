import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result)
    // console.log(result.data.products);
    return result.data.products
})
const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: true,
        allProducts: [],
        dummyProducts: [],
        error: ""
    },
    reducers: {
        // define only synchornous func
        searchProduct: (state, action) => {
            state.allProducts = state.dummyProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
            state.dummyProducts = action.payload
            state.error = ""
        })

        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true
            state.allProducts = []
            state.dummyProducts = []
            state.error = ""
        })

        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false
            state.allProducts = []
            state.dummyProducts = []
            state.error = "API Call Failed"
        })
    }
})

export const { searchProduct } = productSlice.actions
export default productSlice.reducer