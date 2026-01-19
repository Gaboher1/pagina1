import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaSearch,
  FaCalendarAlt,
  FaHandshake,
  FaFlagCheckered,
} from "react-icons/fa";
import "../styles/Proceso.css";

const steps = [
  {
    icon: <FaEnvelope />,
    title: "Tú nos contactas",
    size: "normal",
    text: `Tienes una idea, una tarea, un protocolo, un ensayo o un proyecto…
¡y no sabes por dónde empezar!

Nos escribes y nos cuentas qué necesitas en pocas palabras.`,
  },
  {
    icon: <FaSearch />,
    title: "Analizamos tu caso",
    size: "normal",
    text: `Analizamos tu nivel académico, tu objetivo, tu fecha límite y los requisitos
de tu escuela o institución.

Te orientamos para aterrizar la idea y convertirla en algo claro,
viable y con sentido académico.`,
  },
  {
    icon: <FaCalendarAlt />,
    title: "Propuesta clara",
    size: "wide",
    text: `Sin confusiones, sin letra pequeña.

Recibes una propuesta clara, honesta y bien estructurada donde te explicamos
qué haremos, cómo lo haremos y en qué tiempos recibirás cada avance.

Definimos objetivos, alcances y entregables desde el inicio para que sepas
exactamente qué esperar en cada etapa del proceso.

Tú tienes el control en todo momento: revisas la propuesta, haces preguntas,
ajustamos lo necesario y decides con total tranquilidad si avanzamos.`,
  },
  {
    icon: <FaHandshake />,
    title: "Trabajo colaborativo",
    size: "normal",
    text: `Aquí ocurre la magia:

– Asesoría personalizada  
– Apoyo metodológico  
– Revisión de borradores  
– Construcción del proyecto  
– Análisis estadístico (si aplica)  
– Redacción científica  

Trabajamos hasta que tu proyecto quede sólido y profesional.`,
  },
  {
    icon: <FaFlagCheckered />,
    title: "Entrega final",
    size: "normal",
    text: `Tu trabajo llega completo, claro y listo para entregar o enviar:

✔ Tarea o ensayo terminado  
✔ Protocolo clínico o de investigación  
✔ Proyecto académico completo  
✔ Mano final para publicación científica  
✔ Artículo científico listo para revista  

Además, si lo deseas, seguimos contigo para los ajustes finales o el envío a revista.`,
  },
];

export default function Proceso() {
  return (
    <section className="proceso-wrapper">

      {/* HERO */}
      <motion.header
        className="proceso-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="proceso-eyebrow">Nuestro método</span>
        <h1>Un proceso claro, humano y científico</h1>
        <p>
          Te acompañamos desde la idea inicial hasta el resultado final,
          con estructura, rigor y acompañamiento real.
        </p>
      </motion.header>

      {/* GRID AVANZADO */}
      <div className="proceso-grid-advanced">
        {steps.map((step, index) => (
          <motion.article
            key={index}
            className={`proceso-card-advanced ${step.size}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card-head">
              <div className="card-icon">{step.icon}</div>
              <span className="card-step">Paso {index + 1}</span>
            </div>

            <h3>{step.title}</h3>

            <div className="card-text">
              {step.text.split("\n\n").map((block, i) => {
                if (block.trim().startsWith("–") || block.includes("✔")) {
                  return (
                    <ul key={i}>
                      {block.split("\n").map((item, j) => (
                        <li key={j}>
                          {item.replace("–", "").replace("✔", "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{block}</p>;
              })}
            </div>
          </motion.article>
        ))}
      </div>

      {/* CIERRE */}
      <motion.div
        className="proceso-final"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Tu proyecto no avanza solo. <strong>Avanza contigo.</strong>
      </motion.div>

    </section>
  );
}

