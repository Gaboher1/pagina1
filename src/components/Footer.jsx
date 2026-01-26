import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Luz animada */}
      <div className="footer-glow"></div>

      <div className="footer-content">
        <p className="footer-text">
          © 2025 Asesoría Profesional en Investigación
        </p>
        <p className="footer-sub">Todos los derechos reservados</p>

        {/* BOTONES DE CONTACTO */}
        <div className="contacto-chatbot-footer">
          <h3>¿Necesitas algo más?</h3>
          <p>Puedes hablar directamente con un asesor.</p>

          <div className="contact-buttons-footer">
            <a
              href="https://wa.me/525548284917"
              className="w-btn-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ marginRight: "8px" }} /> WhatsApp
            </a>
            <a href="mailto:alphaomegainves@gmail.com" className="m-btn-footer">
              <FaEnvelope style={{ marginRight: "8px" }} /> Correo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


