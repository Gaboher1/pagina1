import React, { useState } from "react";
import "../styles/Analisis.css";
import {
  FaDatabase,
  FaClock,
  FaLock,
  FaGraduationCap,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export default function Analisis() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setOpenCard(openCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="analisis-wrapper">

      {/* ======================= HERO ======================= */}
      <header className="analisis-hero">
        <h1 className="hero-title">🔍 Análisis de Datos y Bioestadística</h1>
        <p className="hero-subtitle">
          Transformamos tus datos en resultados claros, confiables y listos para publicación científica.
        </p>
      </header>

      {/* ======================= CARD PRINCIPAL ======================= */}
      <div className="analisis-main-card">
        <h2 className="card-title">
          <FaDatabase /> ¿Qué incluye este servicio?
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[
              "Revisión y depuración profesional de bases de datos",
              "Limpieza avanzada y codificación correcta de variables",
              "Identificación y tratamiento de valores atípicos",
              "Selección óptima de pruebas estadísticas",
              "Análisis con software especializado (SPSS, R, Python)",
              "Interpretación clara, precisa y sin tecnicismos",
              "Gráficas y tablas listas para artículos o tesis",
              "Reporte final con rigor metodológico",
            ].map((text, index) => (
              <div className="carousel-card" key={index}>
                <FaCheckCircle className="carousel-icon" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= GRID -> TARJETAS INTERACTIVAS ======================= */}
      <div className="analisis-card-grid">

        {/* CARD 1 */}
        <div
          className={`mini-card ${openCard === 1 ? "open" : ""}`}
          onClick={() => toggleCard(1)}
        >
          <div className="icon-circle"><FaGraduationCap /></div>
          <h3 className="card-title-new">Ideal para</h3>
          <div className="card-content-new">
            <ul>
              <li>Estudiantes de licenciatura y posgrado</li>
              <li>Médicos residentes</li>
              <li>Investigadores clínicos</li>
              <li>Profesionales de la salud</li>
              <li>Tesistas sin experiencia en estadística</li>
            </ul>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className={`mini-card ${openCard === 2 ? "open" : ""}`}
          onClick={() => toggleCard(2)}
        >
          <div className="icon-circle"><FaClock /></div>
          <h3 className="card-title-new">Tiempos de entrega</h3>
          <div className="card-content-new">
            <p>
              Según el proyecto: <b>2 a 5 días.</b><br />
              Opciones urgentes disponibles.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className={`mini-card ${openCard === 3 ? "open" : ""}`}
          onClick={() => toggleCard(3)}
        >
          <div className="icon-circle"><FaLock /></div>
          <h3 className="card-title-new">Confidencialidad</h3>
          <div className="card-content-new">
            <p>
              Tus datos se manejan bajo estrictos protocolos de privacidad
              y estándares profesionales.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div
          className={`mini-card ${openCard === 4 ? "open" : ""}`}
          onClick={() => toggleCard(4)}
        >
          <div className="icon-circle"><FaChartLine /></div>
          <h3 className="card-title-new">Tipos de análisis</h3>
          <div className="card-content-new">
            <ul>
              <li>Estadística descriptiva</li>
              <li>Pruebas de hipótesis</li>
              <li>Regresiones y Correlaciones</li>
              <li>Análisis avanzados</li>
            </ul>
          </div>
        </div>

      </div>

      {/* ======================= ANÁLISIS ESTADÍSTICO DETALLADO ======================= */}
<section className="analisis-stat-section">

  <h2 className="analisis-stat-title">
    📊 ¿Qué incluye el análisis estadístico en cada trabajo?
  </h2>

  <p className="analisis-stat-intro">
    Cada proyecto recibe un análisis estadístico personalizado, riguroso y acorde
    al diseño metodológico, tipo de variables y objetivos de investigación.
  </p>

  <div className="analisis-stat-grid">

    <div className="stat-card">
      <FaDatabase className="stat-icon" />
      <h3>Preparación de datos</h3>
      <ul>
        <li>Revisión de estructura de la base de datos</li>
        <li>Depuración y validación de variables</li>
        <li>Codificación correcta (numérica y categórica)</li>
        <li>Detección de datos faltantes y atípicos</li>
      </ul>
    </div>

    <div className="stat-card">
      <FaChartLine className="stat-icon" />
      <h3>Estadística descriptiva</h3>
      <ul>
        <li>Medidas de tendencia central y dispersión</li>
        <li>Tablas y gráficas interpretables</li>
        <li>Descripción clínica o poblacional</li>
        <li>Análisis por grupos cuando aplica</li>
      </ul>
    </div>

    <div className="stat-card">
      <FaCheckCircle className="stat-icon" />
      <h3>Pruebas estadísticas</h3>
      <ul>
        <li>Selección correcta de pruebas (paramétricas / no paramétricas)</li>
        <li>Pruebas de comparación y asociación</li>
        <li>Correlaciones y regresiones</li>
        <li>Justificación estadística metodológica</li>
      </ul>
    </div>

    <div className="stat-card">
      <FaLock className="stat-icon" />
      <h3>Interpretación y reporte</h3>
      <ul>
        <li>Interpretación clara y sin tecnicismos innecesarios</li>
        <li>Resultados listos para tesis o artículo científico</li>
        <li>Redacción compatible con normas académicas</li>
        <li>Confidencialidad absoluta de la información</li>
      </ul>
    </div>

  </div>
</section>
    </div>
  );
}
