export const showMsg = (dispatch, text, type = "success", delay = 3000) => {
  dispatch({ type: "SET_MSG", payload: { msg: text, type } });
  setTimeout(() => {
    dispatch({ type: "CLEAR_MSG" });
  }, delay);
};
