import { useEffect, useState } from "react";

import ActivityCard from "./ActivityCard";

import "./styles/activitylist.css";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch(
          "https://protojam-groupe-c.onrender.com/retraite"
        );
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivity();
  }, []);

  if (activities.length === 0) {
    return <p> Loading </p>;
  }

  return (
    <div className="activitylist-section">
      <h1>Toutes les activités</h1>
      <div className="activitylist-container">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default ActivityList;
