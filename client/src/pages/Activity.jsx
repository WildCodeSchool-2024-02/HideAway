import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/activity.css";

export default function Activity() {
  return (
    <>
      <div>
        <Header />
        <h1>Hello from Activity Page</h1>
        <button type="button"> Retourner à l'accueil </button>
      </div>
      <Footer />
    </>
  );
}
