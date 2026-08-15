import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/UI_main/Navbar";
import Hero from "./components/UI_main/Hero";
import About from "./components/UI_main/About";
import Projects from "./components/UI_main/Projects";
import Contact from "./components/UI_main/Contact";
import Footer from "./components/UI_main/Footer";
import SignIn from "./components/pages/SignIn";
import { getProfileData, trackVisit } from "./API";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#64ffda" },
    background: { default: "#0a192f", paper: "#0a192f" },
  },
});

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signin" />;
}

function App() {
  const [profileData, setProfileData] = useState();
  const getUserInfo = async () => {
    try {
      const response = await getProfileData();
      if (response) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    trackVisit();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero userData={profileData?.users} />
                  <About  profileData={profileData}/>
                  <Projects projects={profileData?.projects} />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <p>Welcome to admin</p>
                  {/* <Dashboard /> */}
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
