import "../styles/style.css"
const Footer = () => {
  return (
    <footer>
      <p className="footer-text">©2020 Open CRM</p>
      <div className="footer-link-container">
        <a href="#" className="footer-link">
          Техподдержка
        </a>
        <p className="footer-text">
          Построено на <a href="#" className="footer-link">OpenCRM</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
