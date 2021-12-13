import { createSlice } from '@reduxjs/toolkit'


const initialState={user:[],auth:false}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserDetails(state,action){
        state.user=[...state.user,action.payload]
      },
      removeUserDetails(state,{paylaod}){
state.userInfo=[]
      },
      authenticate(state,action){
state.auth=action.payload
      }
}
})

export const {getUserDetails,removeUserDetails,authenticate} = userSlice.actions
export default userSlice.reducer