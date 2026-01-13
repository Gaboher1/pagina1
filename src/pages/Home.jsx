// src/pages/Home.jsx
import React from "react";
import Slider from "react-slick";
import { FaCheckCircle, FaFlask, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Home.css";




export default function Home() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200",
    "https://images.unsplash.com/photo-1581093588401-22d60f3b4a02?q=80&w=1200",
    "https://images.unsplash.com/photo-1559125148-869baf508c95?q=80&w=1200",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="home-container">

      {/* ====================== HERO ====================== */}
      <section className="hero-premium">
        <motion.div
          className="hero-premium-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Consultoría Científica Alpha Omega
          </motion.h1>

          
          <motion.h2
            className="hero-question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            ¿Quién te realizará la revisión de tu tesis?
          </motion.h2>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          ></motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
             El Dr. Omar Valencia Ledezma, científico mexicano con una sólida trayectoria en
            investigación en salud, biología molecular, farmacología, genética y diagnóstico
            microbiológico. Más de 15 años generando evidencia científica de alto impacto,
            formando profesionales y desarrollando proyectos de investigación clínica.
          </motion.p>

          {/* Eliminado el bloque de botones */}
        </motion.div>

        <motion.div
          className="hero-premium-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </section>

      {/* ====================== SLIDER ====================== */}
      <section className="slider-section">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          Líneas Científicas Destacadas
        </motion.h2>

        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, index) => (
              <div key={index} className="slider-item-premium">
                <div className="slider-background" style={{ backgroundImage: `url(${img})` }} />
              </div>
            ))}
          </Slider>
        </div>

        {/* ====================== LÍNEAS CIENTÍFICAS (NUEVO DISEÑO) ====================== */}
        <div className="scientific-lines-container">
          <motion.h3
            className="scientific-lines-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Áreas Científicas Integradas por el Dr. Valencia Ledezma
          </motion.h3>

          <motion.div
            className="scientific-lines-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="scientific-card">🔬 Biotecnología</div>
            <div className="scientific-card">🧫 Ciencias Biomédicas</div>
            <div className="scientific-card">🏥 Salud Clínica</div>
            <div className="scientific-card">🧬 Diagnóstico Molecular</div>
            <div className="scientific-card">🧪 Metabolitos Microbianos</div>
            <div className="scientific-card">📊 Investigación Clínica</div>
            <div className="scientific-card">🌎 Salud Pública</div>
            <div className="scientific-card">🔧 Desarrollo Tecnológico</div>
            <div className="scientific-card">🩺 Cirugía y Casos Complejos</div>
          </motion.div>
        </div>
      </section>
    {/* ====================== BENEFICIOS ====================== */}
<section className="beneficios-premium">

  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Áreas de Mayor Impacto Profesional
  </motion.h2>

  <div className="card-container-premium">

    {/* CARD 1 */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaFlask className="card-icon" />
          <h3>Biología Molecular y Diagnóstico</h3>
          <span className="flip-hint">Haz clic</span>
        </div>
        <div className="flip-card-back">
          <p>
            Identificación de hongos, bacterias y virus mediante tecnologías
            moleculares. Estudios genéticos, expresión de receptores ACE2 y
            diagnóstico diferencial en COVID-19.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaChartLine className="card-icon" />
          <h3>Investigación Clínica y Epidemiológica</h3>
          <span className="flip-hint">Haz clic</span>
        </div>
        <div className="flip-card-back">
          <p>
            Generación de evidencia para mejorar políticas públicas, seguridad del
            paciente y calidad hospitalaria. Proyectos en inmunidad, neurocríticos,
            COVID-19 y salud materna.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FaCheckCircle className="card-icon" />
          <h3>Bioquímica y Desarrollo Tecnológico</h3>
          <span className="flip-hint">Haz clic</span>
        </div>
        <div className="flip-card-back">
          <p>
            Metabolitos microbianos, biocatálisis enzimática, moléculas bioactivas y
            validación de métodos en sistemas diagnósticos y tecnologías
            hospitalarias.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>



      {/* ====================== WHY ====================== */}
      <section className="why-premium">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          ¿Por qué trabajar con el Dr. Omar Valencia Ledezma?
        </motion.h2>

        <div className="why-grid-premium">
          <motion.div className="why-item">Más de 15 años de investigación científica aplicada</motion.div>
          <motion.div className="why-item">40+ publicaciones nacionales e internacionales</motion.div>
          <motion.div className="why-item">Jefe de Investigación en el sector salud</motion.div>
          <motion.div className="why-item">Experiencia en protocolos clínicos y metodologías validadas</motion.div>
          <motion.div className="why-item">45+ congresos nacionales e internacionales</motion.div>
          <motion.div className="why-item">Liderazgo en proyectos de calidad y seguridad del paciente</motion.div>
          <motion.div className="why-item">Formación de 20+ tesis de licenciatura, maestría y especialidades</motion.div>
          <motion.div className="why-item">Experiencia docente en UNAM, UAM, IPN, UACM, UAEH, UAEMex</motion.div>
        </div>
      </section>

      {/* ====================== ENFOQUE AVANZADO ====================== */}
      <section className="futuristic-section">
        <motion.h2 className="futuristic-title" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}>
          Líneas Científicas que Lidera
        </motion.h2>

        <div className="futuristic-grid">
          <motion.div className="futuristic-card" whileHover={{ scale: 1.08 }}>
            <h3>Biología Molecular</h3>
            <p>
              Técnicas como RAPD-PCR, SCAR, análisis polimórfico, bases genómicas y diagnóstico molecular de
              patógenos clínicos.
            </p>
          </motion.div>

          <motion.div className="futuristic-card" whileHover={{ scale: 1.08 }}>
            <h3>Bioquímica y Biocatálisis</h3>
            <p>
              Producción de metabolitos secundarios, biotransformaciones enzimáticas y evaluación antioxidante
              de compuestos bioactivos.
            </p>
          </motion.div>

          <motion.div className="futuristic-card" whileHover={{ scale: 1.08 }}>
            <h3>Investigación Clínica</h3>
            <p>
              Epidemiología, salud pública, cultura de seguridad del paciente, neurocríticos y calidad de la atención.
            </p>
          </motion.div>
        </div>

        <div className="futuristic-glow" />
      </section>

      {/* ====================== TESTIMONIOS ====================== */}
      <section className="testimonios-premium">
<section className="testimonios-premium">
  <motion.h2
    className="section-title testimonios-title"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Testimonios Profesionales
  </motion.h2>

  <div className="testimonios-grid">

    {/* TESTIMONIO 1 */}
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="testimonial-text">
        “La asesoría del Dr. Valencia Ledezma fue determinante para fortalecer
        la metodología y el análisis estadístico de mi tesis. Su rigor científico
        marca una diferencia real.”
      </p>
      <span className="testimonial-author">
        Tesista de Maestría en Ciencias Biomédicas
      </span>
    </motion.div>

    {/* TESTIMONIO 2 */}
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <p className="testimonial-text">
        “Su experiencia en investigación clínica y salud pública permitió
        estructurar un protocolo sólido, ético y viable para publicación científica.”
      </p>
      <span className="testimonial-author">
        Médico Residente – Investigación Clínica
      </span>
    </motion.div>

    {/* TESTIMONIO 3 */}
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <p className="testimonial-text">
        “El acompañamiento fue claro, profesional y altamente especializado.
        Se nota la experiencia real en biología molecular y diagnóstico.”
      </p>
      <span className="testimonial-author">
        Licenciado en Biotecnología
      </span>
    </motion.div>

    {/* TESTIMONIO 4 */}
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
    >
      <p className="testimonial-text">
        “Gracias a su asesoría, mi trabajo cumplió estándares académicos
        exigidos por comités científicos y revisores externos.”
      </p>
      <span className="testimonial-author">
        Estudiante de Doctorado en Ciencias de la Salud
      </span>
    </motion.div>

  </div>
</section>

      </section>
    </div>
  );
}