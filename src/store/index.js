import {configureStore} from '@reduxjs/toolkit';
import CheckData from './checkData';
import Notification from './Notification';

const store = configureStore({
   reducer: {
      check: CheckData.reducer,
      notification: Notification.reducer,
   }
})

export default store;