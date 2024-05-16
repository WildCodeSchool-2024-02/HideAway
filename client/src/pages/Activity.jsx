import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/activity.css";

export default function Activity() {
  return (
    <>
      <div>
        <Header />
        <h1>Mes activités</h1>
        <Link to="/">Retourner à l'accueil</Link>
      </div>
      <Footer />
    </>
  );
}
