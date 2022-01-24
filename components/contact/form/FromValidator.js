import * as Yup from "yup";
export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(2, "First Name is Too Short")
    .max(30, "First Name is Too Long")
    .required(),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(3, "Last Name is Too Short")
    .max(30, "Last Name is Too Long")
    .required(),
  contactNumber: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  email: Yup.string()
    .email("Email you have entered is not valid")
    .min(8, "Email you have entered is not valid")
    .max(30, "Email you have entered is not valid")
    .lowercase()
    .required("Email can not be empty"),
  service: Yup.string()
    .matches(
      /(Front-end Developing|Back-end Developing|Full-Stack Developing|Website Design|)/,
      "Do what it says"
    )
    .required("You Must Have Sector"),

  contactMessage: Yup.string()
    .min(5, "Please Enter A Valid Email")
    .max(30, "Email is Too Large"),
});
