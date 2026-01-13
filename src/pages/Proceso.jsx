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
    title: "1. Tú nos contactas",
    text: `Tienes una idea, una tarea, un protocolo, un ensayo o un proyecto…
¡y no sabes por dónde empezar!

Nos escribes y nos cuentas qué necesitas en pocas palabras.`,
  },
  {
    icon: <FaSearch />,
    title: "2. Revisamos tu caso y definimos lo que realmente necesitas",
    text: `Analizamos tu nivel académico, tu objetivo, tu fecha límite y los requisitos
de tu escuela o institución.

Te orientamos para aterrizar la idea y convertirla en algo claro,
viable y con sentido académico.`,
  },
  {
    icon: <FaCalendarAlt />,
    title: "3. Te entregamos una propuesta clara y tiempos de trabajo",
    text: `Sin confusiones, sin letra pequeña.

Recibes un plan breve con lo que haremos, cómo lo haremos y cuándo tendrás los avances.
Tú decides si avanzamos.`,
  },
  {
    icon: <FaHandshake />,
    title: "4. Trabajamos contigo paso a paso",
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
    title: "5. Te entregamos el resultado final",
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
    <section className="proceso-section">

      {/* HERO */}
      <motion.div
        className="proceso-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Cómo Funciona el Proceso</h1>
        <p>
          Acompañamos tu aprendizaje desde la primera idea
          hasta tu artículo científico terminado.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-card">
              <h2>{step.title}</h2>
              <pre>{step.text}</pre>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CIERRE */}
      <motion.div
        className="proceso-cierre"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Tú avanzas. Tu proyecto avanza. Tu formación se fortalece.
        </p>
      </motion.div>

    </section>
  );
}
