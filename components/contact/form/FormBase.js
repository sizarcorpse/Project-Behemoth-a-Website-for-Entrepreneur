import { useState } from "react";
import { Formik, Form } from "formik";
import validationSchema from "./FromValidator";
import {
  FormControl,
  Grid,
  TextField,
  Box,
  MenuItem,
  TextareaAutosize,
  Autocomplete,
  Button,
  styled,
  Typography,
} from "@mui/material";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.black,
  },

  "& .MuiOutlinedInput-root": {
    color: theme.palette.primary.black,
    borderRadius: 0,
    "& fieldset": {
      backgroundColor: "transparent",

      borderColor: theme.palette.primary.black,
    },
    "&:hover": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.blue,
      },
    },
    "&.Mui-focused": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: theme.palette.primary.blue,
      },
    },
  },
}));

const TextAreaStyled = styled(TextareaAutosize)(({ theme }) => ({
  height: "150px !important",
  maxHeight: 300,
  padding: theme.spacing(1),
  borderRadius: 0,
  borderColor: theme.palette.primary.black,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  backgroundColor: "transparent",
  "&::placeholder": {
    textOverflow: "ellipsis",
    color: theme.palette.primary.black,
  },
  "&:hover": {
    borderColor: theme.palette.primary.blue,
  },
  "&:focus-visible ": {
    outline: "none",
    borderColor: theme.palette.primary.blue,
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.primary.black}`,
  padding: theme.spacing(1, 2),
  borderRadius: "0",
  overflow: "hidden",
  zIndex: "1",

  textTransform: "none",
  "&::before": {
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.blue,
    top: 0,
    left: "0%",
    overflow: "hidden",
    zIndex: "-1",
    transformOrigin: "0%",
    transform: "scaleX(0)",
    transition: "transform 0.5s cubic-bezier(1,-0.06,.49,1.13)",
  },
  "&::after": {
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.orange,
    top: 0,
    left: "0%",
    overflow: "hidden",
    zIndex: "-1",
    transformOrigin: "0%",
    transform: "scaleX(0)",
    transition: "transform 0.5s ease-in 0.5s",
  },
  "&:hover": {
    "&::before": {
      transform: "scaleX(1.01)",
    },
    "&::after": {
      transform: "scaleX(1.01)",
    },
  },
}));

const services = [
  {
    value: "Front-end Developing",
    label: "Front-end Developing",
  },
  {
    value: "Back-end Developing",
    label: "Back-end Developing",
  },
  {
    value: "Full-Stack Developing",
    label: "Full-Stack Developing",
  },
  {
    value: "Website Design",
    label: "Website Design",
  },
];

const technologyList = [
  {
    value: "ReactJs",
    label: "ReactJs",
  },
  {
    value: "NextJs",
    label: "NextJs",
  },
  {
    value: "Strapi",
    label: "Strapi",
  },
  {
    value: "Firebase",
    label: "Firebase",
  },
  {
    value: "MongoDB",
    label: "NodeJS",
  },
];

const FormBase = (props) => {
  const [technology, setTechnology] = useState([]);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    service: "",
    contactMessage: "",
  };

  const onSubmit = async (values) => {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      service,
      contactMessage,
    } = values;
    try {
      console.log(
        firstName,
        lastName,
        email,
        contactNumber,
        service,
        technology,
        contactMessage
      );
    } catch (e) {}
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(props) => {
          const { values, touched, errors, handleChange, handleBlur } = props;
          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.firstName && Boolean(errors.firstName)}
                      autoComplete="firstName"
                      name="firstName"
                      variant="outlined"
                      id="firstName"
                      label="First Name"
                      type="text"
                      size="small"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.lastName && Boolean(errors.lastName)}
                      autoComplete="lastName"
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      type="text"
                      id="lastName"
                      label="Last Name"
                      size="small"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      autoComplete="email"
                      name="email"
                      variant="outlined"
                      fullWidth
                      id="email"
                      type="email"
                      label="Email Address"
                      size="small"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      autoComplete="tel"
                      name="contactNumber"
                      variant="outlined"
                      fullWidth
                      id="contactNumber"
                      type="tel"
                      label="Contact Number"
                      size="small"
                      value={values.contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.service && Boolean(errors.service)}
                      id="service"
                      name="service"
                      select
                      label="Select Service"
                      variant="outlined"
                      size="small"
                      value={values.service}
                      onChange={handleChange}
                    >
                      {services.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFieldStyled>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Autocomplete
                      multiple
                      id="technology"
                      size="small"
                      options={technologyList}
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => {
                        value.map((item) => {
                          setTechnology((prev) => [...value]);
                        });
                      }}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextFieldStyled
                          {...params}
                          label="Choose Technology"
                          placeholder="Select Multiple Technology"
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    error={
                      touched.contactMessage && Boolean(errors.contactMessage)
                    }
                    fullWidth
                  >
                    <TextAreaStyled
                      variant="outlined"
                      minRows={8}
                      placeholder="Share something about your."
                      name="contactMessage"
                      id="contactMessage"
                      value={values.contactMessage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="textarea"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <ButtonStyled type="submit" disableRipple disableFocusRipple>
                    <Typography
                      variant="h5"
                      color="primary.black"
                      component="p"
                    >
                      Send To Us
                    </Typography>
                  </ButtonStyled>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FormBase;
