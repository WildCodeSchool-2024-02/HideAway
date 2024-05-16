import "./styles/activities.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Activities() {
  return (
    <>
      <Header />
      <div>
        <h1>Hello from Activities Page</h1>
      </div>
      <Link to={`/activities/${"activity".id}`}> Voir la retraite </Link>
      <Footer />
    </>
  );
}
