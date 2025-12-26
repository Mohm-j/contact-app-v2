import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validation/contactSchema";
import styles from "./ContactForm.module.css";
import { useEffect } from "react";

const fields = [
  { name: "name", type: "text", placeholder: "Name..." },
  { name: "lastName", type: "text", placeholder: "Last Name..." },
  { name: "email", type: "email", placeholder: "Email..." },
  { name: "phone", type: "text", placeholder: "Phone..." },
];

const ContactForm = ({ isEdit, onSubmit, initialValues = {} }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isEdit && initialValues) {
      reset(initialValues);
    }
  }, [isEdit, reset, initialValues?.id]);

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      {fields.map((field) => (
        <div key={field.name} className={styles.container}>
          {errors[field.name] && (
            <p className={styles.error}>{errors[field.name].message}</p>
          )}
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            className={styles.input}
          />
        </div>
      ))}
      <button type="submit">{isEdit ? "Update Contact" : "Add Contact"}</button>
    </form>
  );
};

export default ContactForm;
