import { createSlice } from "@reduxjs/toolkit";

const Notification = createSlice({
   name: 'notification',
   initialState: {
      notification: null,
   },
   reducers: {
      showNotification(state, action){
         state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message
         }
      },
      clearNotification(state){
         state.notification = null;
      }
   }
})

export const notificationActions = Notification.actions;
export default Notification;