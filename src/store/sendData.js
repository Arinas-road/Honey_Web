import { notificationActions } from "./Notification";

export const SendData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(notificationActions.showNotification({
         status: 'pending',
         title: 'sending data',
         message: 'Sending Your Request',
      }))
      const response = await fetch(
        "https://honeyweb-38253-default-rtdb.firebaseio.com/requests.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        
        dispatch(notificationActions.showNotification({
         status: 'error',
         title: 'Smth went wrong!',
         message: 'Smth went wrong!',
      }))
      throw new Error("smth went wrong!");
      }
      
     
    };
    try {
      await sendRequest();
      dispatch(notificationActions.showNotification({
         status: 'success',
         title: 'data sent',
         message: 'Your Request Reached Us',
      }))
      setTimeout(() => {
         dispatch(notificationActions.clearNotification());
      }, 1500);
    } catch (err) {
      console.error(err);
    }
    
  };
};
