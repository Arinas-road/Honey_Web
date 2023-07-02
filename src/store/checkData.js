import { createSlice } from "@reduxjs/toolkit";
const CheckData = createSlice({
  name: "check",
  initialState: {
    name: "",
    email: "",
    phone: "",
    nameIsValid: false,
    emailIsValid: false,
    phoneIsValid: false,
    formIsValid: false,
    
  },
  reducers: {
    checkPhone(state, action) {
      const newPhone = action.payload;
      state.phone = newPhone;
      if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(newPhone)) {
        state.phoneIsValid = true;
      } else {
        state.phoneIsValid = false;
      }
      console.log(state);
      
    },
    checkEmail(state, action) {
      const newEmail = action.payload;
      state.email = newEmail;
      if (/^\S+@\S+\.\S+$/.test(newEmail)) {
        state.emailIsValid = true;
      } else {
        state.emailIsValid = false;
      }
      console.log(state);
      
    },
    checkName(state, action) {
      const newName = action.payload;
      state.name = newName;
      if (/^[A-z\sa-z\sA-Z]{2,30}$/.test(newName)) {
        state.nameIsValid = true;
      } else {
        state.nameIsValid = false;
      }
      console.log(state);
      
    },
    checkForm(state) {
      if (
        state.nameIsValid &&
        state.phoneIsValid &&
        state.emailIsValid
      ) {
        state.formIsValid = true;
      } else {
         state.formIsValid = false;
      }
      console.log(state);
    },
    clearAll(state){
      state.name = '';
      state.phone = '';
      state.email = '';
      state.emailIsValid = false;
      state.phoneIsValid = false;
      state.nameIsValid = false;
      state.formIsValid = false;
    }
  },
});
export const checkActions = CheckData.actions;
export default CheckData;
