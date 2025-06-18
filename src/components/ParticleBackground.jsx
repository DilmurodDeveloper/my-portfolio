import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setOffsetY(scrollY * 0.2); 
    const fadeOutPoint = 400;
    const newOpacity = Math.max(1 - scrollY / fadeOutPoint, 0);
    setOpacity(newOpacity); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 20, density: { enable: true, area: 800 } },
          shape: {
            type: ["image"],
            image: [
              { src: "/particles/dotnet.png", width: 32, height: 32 },
              { src: "/particles/csharp.png", width: 32, height: 32 },
              { src: "/particles/sqlserver.png", width: 32, height: 32 },
              { src: "/particles/github.png", width: 32, height: 32 },
              { src: "/particles/azure.png", width: 32, height: 32 }
            ],
          },
          opacity: { value: 0.8 },
          size: { value: 28, random: true },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },
          rotate: {
            value: 0,
            animation: { enable: true, speed: 3, sync: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: `${offsetY}px`,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: opacity,
        transition: "top 0.1s ease-out, opacity 0.2s ease-out",
        zIndex: 0,
        pointerEvents: "none", 
      }}
    />
  );
};

export default ParticleBackground;
