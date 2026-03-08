import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// === Projects Data ===
// const projects = [
//   {
//     title: "3D Portfolio",
//     tagline: "🚀 Built to showcase WebGL magic with shaders",
//     desc: "Interactive personal site with Three.js and custom shaders.",
//     image: "/images/portfolio3d.jpg",
//     tech: ["React", "Three.js", "Framer Motion"],
//     demo: "https://example.com",
//     repo: "https://github.com/example/3d-portfolio",
//     featured: true,
//   },
//   {
//     title: "E-Commerce Platform",
//     tagline: "💳 SaaS platform with 5k+ active users",
//     desc: "Full-stack app with serverless backend & Stripe payments.",
//     image: "/images/ecommerce.jpg",
//     tech: ["Next.js", "Stripe", "MongoDB"],
//     demo: "https://example.com",
//     repo: "https://github.com/example/ecommerce",
//   },
//   {
//     title: "AI Dashboard",
//     tagline: "🤖 AI-powered analytics tool for real-time insights",
//     desc: "Custom-built dashboard integrating OpenAI + D3.js charts.",
//     image: "/images/test2.jpg",
//     tech: ["React", "Node.js", "OpenAI", "D3.js"],
//     demo: "https://example.com",
//     repo: "https://github.com/example/ai-dashboard",
//   },
// ];

export default function Projects({ projects }) {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        position: "relative",
        background: "radial-gradient(circle at top, #0a192f, #020c1b)",
        overflow: "hidden",
      }}
    >
      {/* Animated floating grid particles */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(100,255,218,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "moveBg 20s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes moveBg {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; }
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      <Container>
        <Typography
          variant="h3"
          color="primary"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Featured Work
        </Typography>
        <Typography
          color="white"
          textAlign="center"
          sx={{ mb: 8, opacity: 0.8 }}
        >
          A few highlights of projects I’ve built recently.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {projects?.length > 0 ? (
            projects?.map((p, i) => {
              const card = (
                <motion.div
                  key={p.title}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.04, rotate: 0.3, x: 4, y: -4 }}
                  transition={{
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    perspective={1000}
                    scale={1.02}
                    glareEnable
                    glareMaxOpacity={0.35}
                    glareColor="rgba(255,255,255,0.25)"
                    glarePosition="all"
                    style={{ borderRadius: 24 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 3,
                        overflow: "hidden",
                        bgcolor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow:
                          "0 12px 40px rgba(0,0,0,0.4), inset 0 0 0 0 rgba(255,255,255,0.05)",
                        backdropFilter: "blur(12px)",
                        cursor: "pointer",
                        "&:hover .overlay": { opacity: 1 },
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          inset: -2,
                          borderRadius: 3,
                          padding: "2px",
                          background:
                            "linear-gradient(135deg, #64ffda, #00d4ff, #a364ff, #64ffda)",
                          backgroundSize: "400% 400%",
                          animation: "gradientMove 6s ease infinite",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                          zIndex: 1,
                        },
                      }}
                    >
                      {/* Project Image */}
                      <Box
                        component="img"
                        src={p.image}
                        alt={p.title}
                        sx={{
                          width: "100%",
                          height: "auto",
                          maxHeight: { xs: 260, md: p.featured ? 420 : 300 },
                          objectFit: "cover",
                          display: "block",
                          filter: "brightness(0.85)",
                          transition: "transform 0.6s ease",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      />

                      {/* Overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor:
                            "linear-gradient(145deg, rgba(100,255,218,0.95) 0%, rgba(10,25,47,0.96) 100%)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          px: 3,
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          overflowY: "auto",
                          py: 4,
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 1 }}
                          color="white"
                        >
                          {p.tagline}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, mb: 1 }}
                        >
                          {p.title}
                        </Typography>
                        <Typography sx={{ mb: 2, fontSize: 15 }}>
                          {p.description}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          {p && p?.tech_stack &&
                            p.tech_stack.map((t) => (
                              <Chip
                                key={t}
                                label={t}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  bgcolor: "rgba(255,255,255,0.15)",
                                  color: "#fff",
                                }}
                              />
                            ))}
                        </Box>
                        <Box>
                          <IconButton
                            href={p.link}
                            target="_blank"
                            sx={{ color: "white" }}
                          >
                            <LaunchIcon />
                          </IconButton>
                          <IconButton
                            href={p.repo}
                            target="_blank"
                            sx={{ color: "white" }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Title strip */}
                      <Box sx={{ p: 3, zIndex: 2, position: "relative" }}>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {p.title}
                        </Typography>
                      </Box>

                      {/* Glowing Accent Dot */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#64ffda",
                          boxShadow: "0 0 12px #64ffda, 0 0 24px #64ffda",
                          animation: "pulse 2s infinite",
                          zIndex: 3,
                        }}
                      />
                    </Box>
                  </Tilt>
                </motion.div>
              );

              return p.featured ? (
                <Grid size={{ xs: 12 }} key={p.title}>
                  {card}
                </Grid>
              ) : (
                <Grid size={{ xs: 12, md: 6 }} key={p.title}>
                  {card}
                </Grid>
              );
            })
          ) : (
            <p>No Projects Found</p>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
