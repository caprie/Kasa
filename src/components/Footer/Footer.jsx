
import logo from '../../assets/LOGO_index.png'      // import logo
import "./Footer.scss";                             // Import CSS file


function Footer() {                                 // Footer component
  return (                                          // Footer content
    <footer id="Footer">                           {/* Footer element */}
      <img src={logo} alt="Kasa Logo" />           {/* Logo */}
      <p class="footer">© 2025 Kasa. Tous droits réservés.</p>    {/* Text */}
    </footer>
  );
}

export default Footer;                             // Export Footer component