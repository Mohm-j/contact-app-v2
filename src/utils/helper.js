export const showMsg = (dispatch, text, type = "success", delay = 3000) => {
  dispatch({ type: "SET_MSG", payload: { msg: text, type } });
  setTimeout(() => {
    dispatch({ type: "CLEAR_MSG" });
  }, delay);
};

export const validateForm = (form, dispatch) => {
  const { name, lastName, email, phone } = form;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^09\d{9}$/;

  if (!name || !lastName || !email || !phone) {
    showMsg(dispatch, "Please fill all fields", "error");
    return false;
  }
  if (!emailRegex.test(email)) {
    showMsg(dispatch, "Invalid email format", "error");
    return false;
  }
  if (!phoneRegex.test(phone)) {
    showMsg(dispatch, "Phone must start with 09 and be 11 digits", "error");
    return false;
  }

  return true;
};
