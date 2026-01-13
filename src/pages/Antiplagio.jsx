// src/pages/Antiplagio.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Antiplagio.css";

export default function Antiplagio() {
  return (
    <div className="anti-container">

      {/* Partículas flotantes */}
      <div className="anti-particles"></div>

      <motion.h1
        className="anti-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Revisión Antiplagio Profesional con <span>iThenticate®</span>
      </motion.h1>

      <motion.p
        className="anti-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Tu trabajo académico, 100% original y con respaldo internacional.
      </motion.p>

      {/* SECCIÓN 1 - IMPORTANCIA */}
      <motion.div
        className="anti-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>🔍 ¿Por qué es importante la revisión antiplagio?</h2>
        <p>
          En universidades, proyectos de investigación, tesis y artículos científicos, la originalidad es esencial.
          Incluso un error involuntario puede generar:
        </p>
        <ul>
          <li>⚠️ Baja calificación</li>
          <li>⚠️ Rechazo de tesis o protocolo</li>
          <li>⚠️ Problemas éticos</li>
          <li>⚠️ Rechazo por revistas científicas</li>
        </ul>
      </motion.div>

      {/* SECCIÓN 2 - iThenticate */}
      <motion.div
        className="anti-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>🛡️ ¿Qué es iThenticate®?</h2>
        <p>
          iThenticate es la herramienta líder mundial en detección de similitud,
          utilizada por editoriales científicas como:
        </p>

        <div className="anti-logos">
          <span>Elsevier</span>
          <span>Springer</span>
          <span>Wiley</span>
          <span>Nature</span>
        </div>

        <p>
          Proporciona el análisis de similitud más preciso, confiable y aceptado por revistas de alto impacto.
        </p>
      </motion.div>

      {/* SECCIÓN 3 - PROCESO */}
      <motion.h2
        className="anti-section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚀 ¿Cómo funciona nuestro proceso?
      </motion.h2>

      <div className="anti-steps">
        {[
          {
            icon: "📩",
            title: "1. Envías tu documento",
            text: "Aceptamos tesis, ensayos, artículos, protocolos y proyectos académicos."
          },
          {
            icon: "🧬",
            title: "2. Análisis con iThenticate®",
            text: "Comparación con millones de fuentes científicas, libros y repositorios académicos."
          },
          {
            icon: "📊",
            title: "3. Informe profesional",
            text: "Porcentajes de similitud, fuentes detectadas, pasajes críticos y recomendaciones."
          },
          {
            icon: "✍️",
            title: "4. Correcciones (opcional)",
            text: "Parafraseo académico, ajuste metodológico, citación APA/Vancouver."
          },
          {
            icon: "🏆",
            title: "5. Certificado final",
            text: "Informe final y Certificado de Originalidad aprobado para entrega o publicación."
          }
        ].map((step, index) => (
          <motion.div
            key={index}
            className="anti-step-card"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="anti-step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>

      {/* BENEFICIOS */}
      <motion.div
        className="anti-banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        “Tu trabajo no solo será bueno, será ORIGINAL y con evidencia profesional.”
      </motion.div>

    </div>
  );
}
