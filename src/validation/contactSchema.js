import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^09\d{9}$/, "Phone must start with 09 and be 11 digits")
    .required("Phone is required"),
});
