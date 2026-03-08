import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sigRef = useRef(null);

  useEffect(() => {
    // Trigger SVG signature animation on mount
    if (sigRef.current) {
      // Add class to start CSS animation
      sigRef.current.classList.add("draw");
    }
  }, []);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    setSending(true);

    // Simulate network request (replace with real API)
    setTimeout(() => {
      setSending(false);
      setSent(true);
      // auto-reset after 3.5s
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", message: "" });
      }, 3500);
    }, 1400);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        minHeight: "70vh",
        background:
          "radial-gradient(circle at 10% 10%, rgba(100,255,218,0.02), transparent 10%), #061025",
        overflow: "hidden",
      }}
    >
      {/* Subtle floating orbs (CSS-only) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <span className="orb" style={{ left: "8%", top: "10%", width: 120, height: 120, opacity: 0.06 }} />
          <span className="orb" style={{ left: "75%", top: "20%", width: 200, height: 200, opacity: 0.05 }} />
          <span className="orb" style={{ left: "55%", top: "72%", width: 160, height: 160, opacity: 0.04 }} />
          <span className="orb" style={{ left: "20%", top: "68%", width: 90, height: 90, opacity: 0.06 }} />
          {/* <span className="orb" style={{ left: "15%", top: "92%", width: 100, height: 160, opacity: 0.04 }} /> */}
          <span className="orb" style={{ left: "80%", top: "68%", width: 60, height: 90, opacity: 0.06 }} />
          <span className="orb" style={{ left: "40%", top: "58%", width: 90, height: 90, opacity: 0.06 }} />
        </div>
      </Box>

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Let’s Build Something Great
        </Typography>

        <Typography color="white" textAlign="center" sx={{ mb: 5, opacity: 0.85 }}>
          I usually reply within a day. Drop a short note — or share your wildest idea.
        </Typography>

        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={6}
        >
          {/* Form Card */}
          <Grid size={{ xs: 12, md: 8 }} >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.06}
                glareColor="#fff"
                scale={1.01}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                style={{ borderRadius: 18 }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    position: "relative",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
                      Say Hello
                    </Typography>

                    <Typography sx={{ color: "white", opacity: 0.75, fontSize: 14 }}>
                      — I read every message.
                    </Typography>
                  </Box>

                  <TextField
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    label="Your name"
                    variant="filled"
                    fullWidth
                    sx={{
                      mb: 2,
                      ".MuiFilledInput-root": {
                        background: "rgba(255,255,255,0.02)",
                      },
                    }}
                    InputLabelProps={{ style: { color: "rgba(255,255,255,0.6)" } }}
                    required
                  />

                  <TextField
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    label="Email"
                    variant="filled"
                    fullWidth
                    sx={{ mb: 2, ".MuiFilledInput-root": { background: "rgba(255,255,255,0.02)" } }}
                    InputLabelProps={{ style: { color: "rgba(255,255,255,0.6)" } }}
                    type="email"
                    required
                  />

                  <TextField
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    label="Message"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={6}
                    sx={{ mb: 3, ".MuiFilledInput-root": { background: "rgba(255,255,255,0.02)" } }}
                    InputLabelProps={{ style: { color: "rgba(255,255,255,0.6)" } }}
                    required
                  />

                  {error && (
                    <Typography color="error" sx={{ mb: 2 }}>
                      {error}
                    </Typography>
                  )}

                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      style={{ display: "inline-block" }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 700,
                          background: "linear-gradient(90deg,#64ffda,#4facfe)",
                          boxShadow: "0 8px 30px rgba(100,255,218,0.12)",
                          "&:hover": {
                            filter: "brightness(1.05)",
                            transform: "translateY(-2px)",
                          },
                        }}
                        disabled={sending || sent}
                        aria-label="Send message"
                      >
                        <AnimatePresence>
                          {!sent ? (
                            <motion.span
                              key="label"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                            >
                              {sending ? "Sending..." : "Let’s Create Together"}
                            </motion.span>
                          ) : (
                            <motion.span
                              key="sent"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              ✅ Sent
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    {/* subtle micro-copy */}
                    <Typography color="white" sx={{ opacity: 0.7, fontSize: 14 }}>
                      Or email me directly:
                    </Typography>

                    <IconButton href="mailto:yc.official.com" sx={{ color: "primary.main" }} aria-label="email">
                      <EmailIcon />
                    </IconButton>
                  </Box>

                  {/* Success pulse overlay */}
                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 12,
                          zIndex: 10,
                          pointerEvents: "none",
                        }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            bgcolor: "rgba(255,255,255,0.04)",
                            borderRadius: 3,
                            border: "1px solid rgba(255,255,255,0.06)",
                            backdropFilter: "blur(8px)",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.35 }}
                          >
                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <motion.path
                                d="M20 6L9 17l-5-5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                              />
                            </svg>
                          </motion.div>
                          <Typography sx={{ mt: 1, fontWeight: 700 }}>Message received</Typography>
                          <Typography sx={{ opacity: 0.8, fontSize: 13, mt: 0.5 }}>
                            I’ll get back to you shortly — thanks!
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </Tilt>
            </motion.div>
          </Grid>

          {/* Sign-off / Socials */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                  Thanks for stopping by
                </Typography>
                <Typography sx={{ color: "white", opacity: 0.85 }}>
                  If you prefer, connect with me on GitHub or LinkedIn — I'm active and love collaborating.
                </Typography>

                {/* Animated signature SVG */}
                <Box sx={{ mt: 1, mb: 1 }}>
                  {/* <svg
                    ref={sigRef}
                    className="signature"
                    width="200"
                    height="70"
                    viewBox="0 0 300 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M10 50 C60 10, 160 10, 240 50"
                      stroke="#64ffda"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="transparent"
                      style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                    /> */}
                  <span x="20" y="70" fill="#fff" opacity="0.85" fontSize="14" fontFamily="sans-serif">
                    — YC
                  </span>
                  {/* </svg> */}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                  <IconButton href="https://github.com/username" sx={{ color: "white" }} aria-label="github">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href="https://linkedin.com/in/username" sx={{ color: "white" }} aria-label="linkedin">
                    <LinkedInIcon />
                  </IconButton>
                </Box>

                <Typography sx={{ fontSize: 12, color: "white", opacity: 0.6, mt: 1 }}>
                  © {new Date().getFullYear()} YC — Built with care.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Local styles for orbs + signature animation */}
      <style>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(30px);
          transform: translateZ(0);
          background: radial-gradient(circle, rgba(100,255,218,0.35), rgba(100,255,218,0.05));
          animation: floaty 14s ease-in-out infinite;
        }
        .orb:nth-child(2) { animation-duration: 18s; transform: translateZ(0) scale(1.05); }
        .orb:nth-child(3) { animation-duration: 22s; transform: translateZ(0) scale(0.9); }
        .orb:nth-child(4) { animation-duration: 16s; transform: translateZ(0) scale(0.85); }
        @keyframes floaty {
          0% { transform: translateY(0) translateX(0); opacity: 0.9; }
          50% { transform: translateY(-24px) translateX(18px); opacity: 0.6; }
          100% { transform: translateY(0) translateX(0); opacity: 0.9; }
        }

        /* signature draw - CSS triggered by JS */
        .signature path {
          transition: stroke-dashoffset 1.6s cubic-bezier(.2,.9,.2,1);
        }
        .signature.draw path {
          stroke-dashoffset: 0 !important;
        }

        /* responsive tweaks */
        @media (max-width: 900px) {
          .signature { width: 160px; height: 60px; }
        }
      `}</style>
    </Box>
  );
}
