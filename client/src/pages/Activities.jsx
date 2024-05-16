import "./styles/activities.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";

export default function Activities() {
  return (
    <>
      <Header />
      <ActivityList />
      <Link to={`/activities/${"activity".id}`}> Voir la retraite </Link>
      <Footer />
    </>
  );
}
