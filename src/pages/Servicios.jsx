// src/pages/Servicios.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Servicios.css";

// ===== SVG ICONOS (sin dependencias externas) =====
const ThesisIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 3L12 7L20 3L12 11L4 7V17L12 21L20 17V7" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MicroscopeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 18H18M9 18V13M15 18V8M12 13V6L14 4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const StatsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 20V10M10 20V4M16 20V14M22 20V8" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PaperIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 2H15L20 7V22H6V2Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ClinicIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2V22M2 12H22M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const LabIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M10 2V12L5 21H19L14 12V2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// ===== DATOS =====
const servicios = [
  {
    title: "Asesoría en Tesis",
    short: "Transforma tu idea en un proyecto publicable.",
    Icon: ThesisIcon,
    color: "#5AC8FA",
    details: `Te acompaño paso a paso: elección del tema, construcción del marco teórico, diseño metodológico, análisis de resultados, redacción científica y defensa final.
Ideal para estudiantes que buscan trabajos de titulación de alto impacto y con posibilidad de publicarse.
`,
  },
  {
    title: "Proyectos de Investigación",
    short: "Convierte tu idea en investigación real.",
    Icon: MicroscopeIcon,
    color: "#4BA3F2",
    details: `Te ayudo a convertirla en un proyecto viable, ético y metodológicamente sólido, listo para ser registrado, ejecutado y presentado ante comités académicos o instituciones de salud.
Aprende a generar evidencia científica real desde cero.
`,
  },
  {
    title: "Bioestadística y Análisis de Datos",
    short: "Domina el análisis científico moderno.",
    Icon: StatsIcon,
    color: "#3D7ACC",
    details: `Te enseñaré a analizar tus datos con claridad, seleccionar las pruebas estadísticas adecuadas y presentar resultados en tablas, gráficas y reportes profesionales.
Incluye apoyo en software estadístico y revisión de bases de datos.`,
  },
  {
    title: "Publicación Científica",
    short: "Vuelve tu trabajo un artículo publicable.",
    Icon: PaperIcon,
    color: "#57B2FF",
    details: `Te guío en la redacción, estructura IMRyD, análisis crítico, elección de revista, envío, respuesta a revisores y todo el proceso editorial.
Perfecto si deseas fortalecer tu CV, tu posgrado o tu carrera científica.
`,
  },
  {
    title: "Protocolos Clínicos",
    short: "Diseño metodológico para estudios clínicos.",
    Icon: ClinicIcon,
    color: "#7ED3FF",
    details: `Aprende a diseñar estudios clínicos y epidemiológicos que cumplan criterios éticos y metodológicos de alto nivel.
Incluye formulación de preguntas de investigación, diseño de muestras, selección de variables, elaboración de consentimientos y registro institucional.
Ideal para residentes, médicos en formación e investigadores clínicos.
`,
  },
  {
    title: "Consultoría para Laboratorios",
    short: "Optimiza métodos, procesos y reactivos.",
    Icon: LabIcon,
    color: "#84C5FF",
    details: `Brindo asesoría para desarrollo y validación de métodos, diseño de reactivos, optimización de procedimientos, control de calidad y cumplimiento regulatorio.
Pensado para estudiantes de áreas químico-biológicas y profesionales que buscan fortalecer su perfil técnico.
`,
  },
];

export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState(2); // empiezo con la tarjeta central activa
  const ActiveIcon = servicios[activeIndex].Icon;

  return (
    <div
      className="servicios-container"
      style={{
        background: `linear-gradient(145deg, #0d1b2a, ${servicios[activeIndex].color}, #0d1b2a)`,
      }}
    >
      <div className="particle-layer" />

      <motion.h1
        className="servicios-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Servicios Profesionales
      </motion.h1>

      <p className="servicios-sub">
        Explora cada área y descubre cómo impulsar tu crecimiento científico.
      </p>

      {/* CARRUSEL 3D */}
      <div className="carousel-3d" role="list">
        {servicios.map((srv, i) => {
          const IconComponent = srv.Icon;

          return (
            <motion.div
              key={i}
              role="listitem"
              className={`card-3d ${i === activeIndex ? "active" : ""}`}
              style={{ "--color": srv.color }}
              // entrada desde la derecha: TODAS entran simultáneamente desde la x positiva
              initial={{ x: 600, opacity: 0, rotateY: 30 }}
              animate={{
                x: 0,
                opacity: 1,
                rotateY: 0,
                // posicionamiento final en 3D usando las variables CSS
                "--offset": i - activeIndex,
                "--abs-offset": Math.abs(i - activeIndex),
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.04 }}
            >
              <div className="icon-wrapper">
                <IconComponent />
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.short}</p>
            </motion.div>
          );
        })}
      </div>

      {/* PANEL DETALLADO */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="detail-panel"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="detail-header"
            style={{ borderColor: servicios[activeIndex].color }}
          >
            <div
              className="detail-icon"
              style={{ color: servicios[activeIndex].color }}
            >
              <ActiveIcon />
            </div>

            <div>
              <h2>{servicios[activeIndex].title}</h2>
              <p className="detail-short">{servicios[activeIndex].short}</p>
            </div>
          </div>

          <p className="detail-description">{servicios[activeIndex].details}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
