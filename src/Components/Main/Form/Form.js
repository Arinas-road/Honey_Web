import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkActions } from "../../../store/checkData";
import { SendData } from "../../../store/sendData";
const Form = () => {
  const dispatch = useDispatch();
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [phoneIsBlured, setPhoneIsBlured] = useState(false);
  const [emailIsBlured, setEmailIsBlured] = useState(false);
  const [nameIsBlured, setNameIsBlured] = useState(false);
  let phoneRef = useRef();
  let emailRef = useRef();
  let nameRef = useRef();
  const name = useSelector((state) => state.check.name);
  const email = useSelector((state) => state.check.email);
  const phone = useSelector((state) => state.check.phone);
  let data = { id: name, name: name, email: email, phone: phone };
  const nameIsValid = useSelector((state) => state.check.nameIsValid);
  const emailIsValid = useSelector((state) => state.check.emailIsValid);
  const phoneIsValid = useSelector((state) => state.check.phoneIsValid);
  const formIsValid = useSelector((state) => state.check.formIsValid);
  console.log(formIsValid);
  let inputName = "";
  let inputEmail = "";
  let inputPhone = "";
  const onNameChangeHandler = () => {
    inputName = nameRef.current.value;
    dispatch(checkActions.checkName(inputName));
    setNameIsTouched(true);
    dispatch(checkActions.checkForm());
  };

  const onEmailChangeHandler = () => {
    inputEmail = emailRef.current.value;
    dispatch(checkActions.checkEmail(inputEmail));
    setEmailIsTouched(true);
    dispatch(checkActions.checkForm());
  };
  const onPhoneChangeHandler = () => {
    inputPhone = phoneRef.current.value;
    dispatch(checkActions.checkPhone(inputPhone));
    setPhoneIsTouched(true);
    dispatch(checkActions.checkForm());
  };
  const clearAll = () => {
    setEmailIsTouched(false);
    setNameIsTouched(false);
    setPhoneIsTouched(false);
    setEmailIsBlured(false);
    setNameIsBlured(false);
    setPhoneIsBlured(false);
    phoneRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    dispatch(checkActions.clearAll());
  };
  let AllIsTouched = nameIsTouched && phoneIsTouched && emailIsTouched;
  const sendDataHandler = (e) => {
    e.preventDefault();
    if (AllIsTouched && formIsValid) {
      console.log(SendData);
      console.log(data);
      dispatch(SendData(data));
      clearAll();
      
    }
  };
  console.log(nameIsValid, phoneIsValid, emailIsValid);
  const classesName = `form ${
    !nameIsValid && nameIsTouched && nameIsBlured ? "input-error" : ""
  }`;
  const classesPhone = `form ${
    !phoneIsValid && phoneIsTouched && phoneIsBlured ? "input-error" : ""
  }`;
  const classesEmail = `form ${
    !emailIsValid && emailIsTouched && emailIsBlured ? "input-error" : ""
  }`;
  return (
    <div className="form-main" id="contact">
      <div className="form-main-main">
        <div className="form-text">
          <h1>Contact us</h1>
          <p>Fill the form below to contact us!</p>
        </div>
        <div className="form-all">
          <div className="form-contacts">
            <div className="form-info form-address">
              <h1>Address</h1>
              <p>1234 Sugar Road, Owanna, Monana, 556677</p>
            </div>
            <div className="form-info form-phone">
              <h1>Phone</h1>
              <p>505-123-456-7891</p>
            </div>
            <div className="form-info form-email">
              <h1>Email</h1>
              <p>example@gmail.com</p>
            </div>
          </div>
          <form>
            <p className="form-title">Send Request</p>

            <div className={classesName}>
              <input
                type="text"
                onChange={onNameChangeHandler}
                ref={nameRef}
                placeholder="Full Name"
                id="full-name"
                onBlur={() => setNameIsBlured(true)}
              ></input>
            </div>
            <div className={classesEmail}>
              <input
                type="email"
                onChange={onEmailChangeHandler}
                ref={emailRef}
                placeholder="Email"
                id="email"
                onBlur={() => setEmailIsBlured(true)}
              ></input>
            </div>
            <div className={classesPhone}>
              <input
                type="tel"
                onChange={onPhoneChangeHandler}
                ref={phoneRef}
                placeholder="Phone Number"
                id="phone"
                onBlur={() => setPhoneIsBlured(true)}
              ></input>
            </div>
            <div className="form-button">
              <button onClick={sendDataHandler} disabled={!formIsValid}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
