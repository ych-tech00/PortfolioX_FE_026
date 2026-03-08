import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

// const profileData = {
//   name: "Your Name",
//   bio: `Full-stack developer who blends design thinking with modern web technologies
//         to craft immersive digital experiences.`,
//   photo: "/images/profile-pic.jpg",
//   skills: [
//     { label: "React", level: 90 },
//     { label: "Next.js", level: 85 },
//     { label: "Three.js", level: 75 },
//     { label: "Node.js", level: 80 },
//     { label: "GraphQL", level: 70 },
//     { label: "AWS", level: 65 },
//     { label: "Figma", level: 90 },
//   ],
//   journey: [
//     { year: "2023 – Present", role: "Frontend Engineer at CreativeTech" },
//     { year: "2021 – 2023", role: "Freelance Web Developer & Designer" },
//     { year: "2019 – 2021", role: "Computer Science Graduate, XYZ University" },
//   ],
// };

export default function About({profileData}) {
  return (
    <Container maxWidth={false} id="about" sx={{ py: { xs: 8, md: 12 } }}>
      {/* ===== Glass-like Wrapper ===== */}
      <Paper
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 6,
          bgcolor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Grid spacing={8} alignItems="center">
          {/* ===== Avatar + Bio ===== */}
          <Grid size={{ xs: 12, md: 4 }} >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 6,
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="d-lg-flex justify-content-lg-center align-items-lg-center">

                  <Avatar
                    src={profileData?.users?.profile_image}
                    alt={profileData?.users?.name}
                    sx={{
                      width: { xs: 'auto', md: 180 },
                      height: { xs: 'auto', md: 180 },
                      mb: 3,
                      border: "4px solid #64ffda",
                      boxShadow: "0 0 25px rgba(100,255,218,0.6)",
                    }}
                  />
                </div>

                {/* Animated Gradient Name */}
                {/* <motion.div */}
                <Typography
                  // initial={{ backgroundPosition: "200% center" }}
                  // animate={{ backgroundPosition: "-200% center" }}
                  // transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  style={{
                    background: "linear-gradient(90deg,#64ffda,#4facfe,#64ffda)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  {profileData?.users?.name}
                </Typography>
                {/* </motion.div> */}

                <Typography
                  variant="body1"
                  color="white"
                  sx={{ mt: 2, fontStyle: "italic" }}
                >
                  {profileData?.users?.bio}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* ===== Skills Section ===== */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ pt: 2 }}>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Skills & Expertise
            </Typography>

            <Box sx={{ mt: 2 }}>
              {profileData?.skills.map((s, idx) => (
                <Box key={s.label} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Typography color="white">{s.label}</Typography>
                    <Typography color="primary">{s.level}%</Typography>
                  </Box>

                  {/* Animated Progress Bar */}
                  <Box
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        borderRadius: 5,
                        background: "linear-gradient(90deg,#64ffda,#4facfe)",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* ===== Timeline Section ===== */}
        <Box sx={{ mt: 12 }}>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Career Journey
          </Typography>

          <Box
            sx={{
              position: "relative",
              pl: { xs: 2, md: 8 },
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: 8, md: 32 },
                top: 0,
                bottom: 0,
                width: "4px",
                background:
                  "linear-gradient(180deg, #64ffda 0%, rgba(100,255,218,0) 100%)",
                borderRadius: 2,
                animation: "lineflow 4s linear infinite",
              },
              "@keyframes lineflow": {
                "0%": { backgroundPosition: "0 0" },
                "100%": { backgroundPosition: "0 100%" },
              },
            }}
          >
            {profileData?.journey?.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                style={{ marginBottom: "3rem" }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  {/* Glowing Dot */}
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      bgcolor: "#64ffda",
                      boxShadow: "0 0 16px #64ffda",
                      mr: 4,
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  {/* Timeline Card */}
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(12px)",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography color="white" sx={{ mt: 0.5 }}>
                      {item.role}
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
