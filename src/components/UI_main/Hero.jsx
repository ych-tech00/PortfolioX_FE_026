//the main section , i.e. the first section
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

function SpinningTorus() {
  return (
    <mesh rotation={[0.3, 0.2, 0]}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
      <meshStandardMaterial
        color="#64ffda"
        emissive="#64ffda"
        emissiveIntensity={0.6}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Hero({ userData }) {

  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ---- 3D Scene ---- */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        camera={{ position: [0, 0, 6] }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Stars
          radius={6}
          depth={50}
          count={7000}
          factor={3}
          fade
          saturation={0} // keep them white
          speed={2} // <-- makes them twinkle / shimmer
        />
        {/* <Stars
          radius={8}
          depth={50}
          count={7000}
          factor={4}
          fade
          saturation={0}     // keep them white
          speed={2}          // <-- makes them twinkle / shimmer
        /> it's making me dizzyyyy 😭 but it's looking damn cool */}
        {/* <SpinningTorus /> */}
        <mesh rotation={[0.1, 0.1, 0]}>
          <sphereGeometry args={[3, 15, 2]} />
          <meshStandardMaterial
            color="#64ffda"
            emissive="#ff64bd"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>

      {/* ---- Gradient Overlay for Contrast ---- */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* ---- Content ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 1,
            background: "linear-gradient(90deg,#64ffda,#4facfe,#64ffda)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(100,255,218,0.6)",
          }}
        >
          Hi, I'm {userData?.name}
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: 4,
              letterSpacing: 1,
            }}
          >
            {userData?.headline}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderWidth: 2,
              px: 4,
              "&:hover": {
                borderColor: "#64ffda",
                background: "rgba(100,255,218,0.1)",
              },
            }}
            href="#projects"
          >
            View My Work
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
}
