import Card from "./Card";
import "../styles.css";

const CardHolder = ({ profileData }) => {
  return (
    <div className="portfolio-item">
      <div
        className="portfolio-background-img"
        style={{ backgroundImage: `url(images/${profileData.image})` }}
      ></div>
      <Card profileData={profileData} />
    </div>
  );
};

export default CardHolder;
