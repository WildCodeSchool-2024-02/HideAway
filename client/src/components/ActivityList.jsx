import ActivityCard from "./ActivityCard";

import "./styles/activitylist.css";

const activities = [
  {
    id: 1,
    image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    title: "Retraite élevage de chèvres",
    subtitle: "Parce que les chèvres c'est génial",
    desc: "L'élevage de chèvres dans le Larzac ne se limite pas à la simple production laitière. C'est un art de vivre, une communion avec la nature et les éléments. Chaque jour, les chèvres parcourent les pâturages, broutant les herbes aromatiques qui confèrent à leur lait des saveurs uniques. Ce lait, transformé avec soin par les fromagers locaux, donne naissance à des fromages au caractère authentique, symboles de l'identité culinaire du Larzac.",
    activity1: "Yoga chèvre",
    activity2: "Fromage de chèvre",
    activity3: "Visite de ferme",
    activity1image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity2image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity3image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
  },
  {
    id: 2,
    image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    title: "Retraite élevage de chèvres",
    subtitle: "Parce que les chèvres c'est génial",
    desc: "Ceci est la desc",
    activity1: "Yoga chèvre",
    activity2: "Fromage de chèvre",
    activity3: "Visite de ferme",
    activity1image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity2image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity3image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
  },
  {
    id: 3,
    image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    title: "Retraite élevage de chèvres",
    subtitle: "Parce que les chèvres c'est génial",
    desc: "Ceci est la desc",
    activity1: "Yoga chèvre",
    activity2: "Fromage de chèvre",
    activity3: "Visite de ferme",
    activity1image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity2image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
    activity3image:
      "https://equationdecarriere.com/wp-content/uploads/2022/07/Equation-de-carriere-article-pas-besoin-d-elever-des-chevres-dans-le-larzac.jpg",
  },
];

function ActivityList() {
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
