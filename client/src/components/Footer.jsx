import "./styles/footer.css";

import github from "../assets/images/githublogoo.png"

function Footer() {
  return (
    <div className="footer">
      <h1 className="made">
        Made by Julien LEBLANC, Nicolas JUCHEREAU, Anaé LAWANI, Fanny PRÊTRE,
        Quentin THUILLIER ❤️
      </h1>
      <a
        href="https://github.com/WildCodeSchool-2024-02/protojam-groupe-c"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img
          src={github}
          alt="GitHub Logo"
          className="github-logo"
        />
      </a>
      <h2 className="projettext">Groupe - C | ProtoJam 2024</h2>
    </div>
  );
}

export default Footer;
