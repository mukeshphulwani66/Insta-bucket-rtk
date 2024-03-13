import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const groceryApi = createApi({
    reducerPath: 'groceryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
      fetchGroceries: builder.query({
        providesTags:["grocery"],
        query: () => {
            return {
                url:"/groceries",
                method:"GET"
            }
        },
      }),
      addNewGrocery: builder.mutation({
        invalidatesTags:["grocery"],
        query: (groceryObj) => {
            return {
                url:"/groceries",
                method:"POST",
                body:groceryObj
            }
        },
      }),

    }),
})

export const {useFetchGroceriesQuery,useAddNewGroceryMutation} = groceryApi