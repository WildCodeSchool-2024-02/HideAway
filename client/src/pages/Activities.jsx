import "./styles/activities.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActivityList from "../components/ActivityList";

export default function Activities() {
  return (
    <div className="backgroundquizz">
      <Header />
      <ActivityList />
      <Footer />
    </div>
  );
}
