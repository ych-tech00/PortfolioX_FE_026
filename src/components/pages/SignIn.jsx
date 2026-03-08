import React from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";

export default function SignIn() {
  const { login } = useAuth();
  const [error, setError] = React.useState("");

  return (
    <Container maxWidth="xs" sx={{ pt: 12 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Admin Sign In
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setError("");
            await login(values.email, values.password);
          } catch (e) {
            setError(e.message);
          }
          setSubmitting(false);
        }}
      >
        {({ handleChange, values, errors, touched, isSubmitting }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Box textAlign="center" mt={2}>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Sign In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
