import "./FooterStyle.css";

const Footer = () => {
  const fullYear = new Date().getFullYear().toString();

  return (
    <div className="footer-wrapper">
      <p className="font-color text-font footer-content">
        Copyright {fullYear} Cyborpixel | All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
