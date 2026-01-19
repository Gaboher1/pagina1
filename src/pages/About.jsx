import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import aboutPhoto from "../assets/logo_doc.png";


export default function About() {
  return (
    <div className="about-wrapper">

      {/* ====================== SECCIÓN HERO ====================== */}
      <section className="about-hero-modern">
        <motion.div
          className="about-hero-modern-text"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>GRUPO OMEGA </h1>
          <p>
            Grupo Omega, multidisciplinario, con más de 15 años integrando biología molecular, microbiología clínica, farmacología, salud pública y análisis científico aplicado. Contribuye activamente al desarrollo de soluciones innovadoras para el diagnóstico, prevención y análisis de enfermedades de alto impacto poblacional.
          </p>

          <motion.div
            className="about-hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div><strong>15+</strong><span>Años de trayectoria</span></div>
            <div><strong>40+</strong><span>Artículos científicos</span></div>
            <div><strong>45+</strong><span>Congresos internacionales</span></div>
          </motion.div>
        </motion.div>

       <motion.div
  className="about-hero-modern-photo"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
>
  <img
    src={aboutPhoto}
    alt="Foto representativa"
    className="about-photo-img"
  />
</motion.div>


      </section>

      {/* ====================== SECCIÓN 1: TARJETAS ====================== */}
<section className="about-section-alt">
  <motion.h2
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="section-title"
  >
    Perfil Profesional del Grupo Omega
  </motion.h2>

  <div className="alt-card-grid">

    <motion.div className="alt-card-1" whileHover={{ scale: 1.05 }}>
      <h3>Enfoque Científico</h3>
      <p>
        El Grupo Omega está conformado por un equipo multidisciplinario con sólida
        formación en ciencias biológicas y de la salud, integrando biología molecular,
        bioquímica, microbiología y análisis científico aplicado para la generación
        de conocimiento e innovación en salud.
      </p>
    </motion.div>

    <motion.div className="alt-card-2" whileHover={{ scale: 1.05 }}>
      <h3>Experiencia y Liderazgo</h3>
      <p>
        El Grupo Omega lidera y desarrolla proyectos de investigación científica,
        clínica y aplicada, coordinando equipos multidisciplinarios, diseñando
        protocolos, y generando evidencia científica para la toma de decisiones
        estratégicas en el ámbito de la salud y la biotecnología.
      </p>
    </motion.div>

    <motion.div className="alt-card-3" whileHover={{ scale: 1.08 }}>
      <h3>Producción Científica</h3>
      <ul>
        <li>Producción constante de artículos científicos y documentos técnicos</li>
        <li>Participación activa en congresos, foros y eventos especializados</li>
        <li>Colaboraciones nacionales e internacionales en proyectos de investigación</li>
      </ul>
    </motion.div>

  </div>
</section>


      {/* ====================== SECCIÓN 2: LÍNEA DEL TIEMPO ====================== */}
      <section className="timeline-section">
        <h2 className="section-title">Trayectoria Profesional</h2>

        <div className="timeline">

          <motion.div
            className="timeline-item"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2008 — Formación y Bases Científicas</h3>
            <p>
              Desarrollo de competencias en biotecnología, biología molecular, farmacología
              y técnicas de laboratorio clínico. Inicio en investigación académica.
            </p>
          </motion.div>

          <motion.div
            className="timeline-item right"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2012 — Investigación Clínica y Salud Pública</h3>
            <p>
              Participación en estudios epidemiológicos, validación de pruebas diagnósticas,
              vigilancia de enfermedades y evaluación de intervenciones en salud.
            </p>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <h3>2020 — Consolidación Profesional</h3>
            <p>
              Diversificación de líneas científicas, publicación internacional, formación
              de nuevos investigadores y liderazgo institucional en proyectos de alto impacto.
            </p>
          </motion.div>

          <motion.div
  className="timeline-item right"
  initial={{ x: 60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <div className="timeline-dot" />
  <h3>2021 — Actualidad | Apoyo a Proyectos Científicos y Formación de Recursos Humanos</h3>
  <p>
    Acompañamiento integral en el desarrollo de proyectos científicos, tesis,
    protocolos de investigación y publicaciones académicas. Formación y
    capacitación de recursos humanos en investigación, fortaleciendo competencias
    metodológicas, analíticas y éticas en distintos niveles académicos.
  </p>
</motion.div>


        </div>
      </section>

      {/* ====================== SECCIÓN 3: ACORDEÓN ====================== */}
      <section className="accordion-section">
        <h2 className="section-title">Líneas Científicas</h2>

        <details>
          <summary>Biología Molecular</summary>
          <p>
            Amplia experiencia en PCR, qPCR, secuenciación, análisis genético, diagnóstico
            molecular, validación de biomarcadores y diseño de protocolos experimentales.
          </p>
        </details>

        <details>
          <summary>Microbiología Clínica</summary>
          <p>
            Manejo de microorganismos patógenos, técnicas de cultivo, identificación,
            susceptibilidad antimicrobiana y análisis epidemiológico de enfermedades infecciosas.
          </p>
        </details>

        <details>
          <summary>Farmacología y Bioquímica</summary>
          <p>
            Evaluación de compuestos bioactivos, mecanismos moleculares, toxicidad,
            farmacodinámica, farmacocinética y desarrollo de propuestas terapéuticas.
          </p>
        </details>

        <details>
          <summary>Investigación Clínica</summary>
          <p>
            Diseño y ejecución de protocolos clínicos, manejo de bases de datos,
            análisis estadístico, ética en investigación y estudios de intervención.
          </p>
        </details>
      </section>

      {/* ====================== SECCIÓN 4: MISIÓN / VISIÓN / VALORES ====================== */}
      <section className="floating-cards-section">
        <h2 className="section-title">Misión, Visión y Valores</h2>

        <div className="floating-cards">

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>MISIÓN</h3>
            <p>
              Impulsar el avance científico mediante investigación rigurosa, divulgación
              académica y acompañamiento integral para estudiantes, profesionales e
              instituciones que buscan fortalecer la calidad de sus proyectos.
            </p>
          </motion.div>

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>VISIÓN</h3>
            <p>
              Convertirse en referente nacional e internacional en investigación científica
              aplicada, formación académica y generación de conocimiento de alto impacto.
            </p>
          </motion.div>

          <motion.div className="floating-card" whileHover={{ y: -10 }}>
            <h3>VALORES</h3>
            <ul>
              <li>Rigor metodológico</li>
              <li>Integridad científica</li>
              <li>Innovación constante</li>
              <li>Excelencia y compromiso académico</li>
              <li>Confidencialidad y ética profesional</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
