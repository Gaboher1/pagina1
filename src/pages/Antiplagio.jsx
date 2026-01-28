import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaFileAlt,
  FaQuestionCircle
} from "react-icons/fa";
import "../styles/Antiplagio.css";

export default function Antiplagio() {
  return (
    <div className="anti-container">

      {/* PARTÍCULAS */}
      <div className="anti-particles"></div>

      {/* CTA WHATSAPP */}
      <a
        href="https://wa.me/5210000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="anti-whatsapp"
      >
        <FaWhatsapp />
        <span>Cotizar ahora</span>
      </a>

      {/* HERO */}
      <motion.h1
        className="anti-title glow-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Revisión Antiplagio Profesional con <span>iThenticate®</span>
      </motion.h1>

      <motion.p
        className="anti-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Detecta similitudes, protege tu trabajo y entrega con confianza académica.
      </motion.p>

      {/* TRUST */}
      <div className="anti-trust">
        <div><FaCheckCircle /> Aceptado por revistas científicas</div>
        <div><FaShieldAlt /> Confidencialidad total</div>
        <div><FaCheckCircle /> Certificado de originalidad</div>
      </div>

      {/* IMPORTANCIA */}
      <motion.div className="anti-card" whileHover={{ scale: 1.03 }}>
        <h2>🔍 ¿Por qué es importante la revisión antiplagio?</h2>
        <p>
          La revisión antiplagio garantiza que tu documento cumpla con los
          estándares éticos y académicos exigidos por universidades y revistas científicas.
        </p>
        <ul>
          <li>❌ Evita rechazo de tesis o artículos</li>
          <li>❌ Previene sanciones académicas</li>
          <li>❌ Reduce observaciones de sinodales y editores</li>
          <li>❌ Protege tu reputación académica</li>
        </ul>
      </motion.div>

      {/* QUÉ DETECTA */}
      <motion.div className="anti-card" whileHover={{ scale: 1.03 }}>
        <h2>🧬 ¿Qué detecta iThenticate®?</h2>
        <ul>
          <li>📌 Coincidencias textuales exactas</li>
          <li>📌 Parafraseo inadecuado</li>
          <li>📌 Autoplagio</li>
          <li>📌 Uso incorrecto de citas y referencias</li>
          <li>📌 Similitud con artículos, libros y repositorios</li>
        </ul>
      </motion.div>

      {/* DOCUMENTOS */}
      <motion.div className="anti-card" whileHover={{ scale: 1.03 }}>
        <h2>📄 Tipos de documentos que revisamos</h2>
        <div className="anti-docs">
          {[
            "Tesis (licenciatura, maestría, doctorado)",
            "Artículos científicos",
            "Protocolos de investigación",
            "Ensayos académicos",
            "Proyectos institucionales",
            "Capítulos de libro"
          ].map((doc, i) => (
            <div key={i}><FaFileAlt /> {doc}</div>
          ))}
        </div>
      </motion.div>

      {/* NO ES PLAGIO */}
      <motion.div className="anti-card" whileHover={{ scale: 1.03 }}>
        <h2>🧠 ¿Qué NO se considera plagio?</h2>
        <p>
          No todas las coincidencias son plagio. iThenticate identifica similitudes,
          pero el análisis profesional permite diferenciar:
        </p>
        <ul>
          <li>✔️ Referencias correctamente citadas</li>
          <li>✔️ Metodología estándar</li>
          <li>✔️ Frases técnicas comunes</li>
          <li>✔️ Bibliografía</li>
        </ul>
      </motion.div>

      {/* TIEMPOS */}
      <motion.div className="anti-card" whileHover={{ scale: 1.03 }}>
        <h2><FaClock /> Tiempos de entrega</h2>
        <ul>
          <li>⏱️ Revisión estándar: 24 – 48 horas</li>
          <li>⚡ Revisión express: 6 – 12 horas</li>
          <li>✍️ Correcciones: según extensión</li>
        </ul>
      </motion.div>

      {/* PROCESO */}
<motion.h2 className="anti-section-title">
  🚀 Nuestro proceso profesional
</motion.h2>

<div className="anti-steps anti-steps-circular">
  {[
    {
      icon: "📩",
      title: "Recepción del documento",
      text: "Recibimos tu archivo en formato Word o PDF mediante un canal seguro. Garantizamos confidencialidad absoluta y eliminación del archivo tras la revisión."
    },
    {
      icon: "🧬",
      title: "Análisis con iThenticate®",
      text: "Comparamos tu documento con millones de artículos científicos, libros, revistas indexadas y repositorios académicos internacionales."
    },
    {
      icon: "📊",
      title: "Informe de similitud",
      text: "Obtienes un reporte detallado con porcentaje de similitud, fuentes detectadas y coincidencias resaltadas para revisión académica."
    },
    {
      icon: "✍️",
      title: "Correcciones académicas",
      text: "De forma opcional realizamos parafraseo académico, mejora de citación y ajustes metodológicos para reducir similitud sin perder rigor."
    },
    {
      icon: "🏆",
      title: "Certificación final",
      text: "Emitimos un Certificado de Originalidad que avala que tu trabajo cumple con el porcentaje aceptable de similitud y un uso mínimo de inteligencia artificial."
    },
  ].map((step, i) => (
    <motion.details
      key={i}
      className="anti-step-circle"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
    >
      <summary>
        <div className="circle-btn">
          <span className="circle-icon">{step.icon}</span>
        </div>
        <h3>{step.title}</h3>
      </summary>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {step.text}
      </motion.p>
    </motion.details>
  ))}
</div>

{/* CERTIFICADO FINAL */}
<motion.div
  className="anti-banner"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  🏆 Al finalizar el proceso, se otorga un <strong>Certificado de Originalidad</strong>  
  que acredita que el documento cuenta con un <strong>porcentaje de similitud adecuado</strong>  
  para ser aceptado en instituciones educativas y revistas científicas, así como un  
  <strong>porcentaje muy bajo de contenido generado por inteligencia artificial</strong>.
</motion.div>


      {/* FAQ */}
      <motion.div className="anti-card">
        <h2><FaQuestionCircle /> Preguntas frecuentes</h2>
        <p><strong>¿Mi documento se guarda?</strong><br />No. Tu archivo es confidencial.</p>
        <p><strong>¿Garantizan aprobación?</strong><br />Reducimos el riesgo y te orientamos profesionalmente.</p>
        <p><strong>¿Aceptan trabajos en otro idioma?</strong><br />Sí, español e inglés.</p>
      </motion.div>

      {/* CTA FINAL */}
      <motion.div className="anti-banner">
        📘 Protege tu trabajo académico.  
        📊 Detecta similitudes.  
        🏆 Entrega con confianza profesional.
      </motion.div>

      

    </div>
  );
}
