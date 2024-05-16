import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/quizz.css";

export default function Quizz() {
  return (
    <>
      <Header />
      <h1>Hello from Quizz Page</h1>
      <Link to="*" activeClassName="active">
        Finir le Quizz
      </Link>

      <Footer />
    </>
  );
}
