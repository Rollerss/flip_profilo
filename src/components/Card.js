import "../App.css";

const Card = ({ profileData }) => {
  return (
    <div className="img-text">
      <img className="logo" src={`./images/logos/` + profileData.icon}></img>
      <p className="subtitle">{profileData.title}</p>
      <p className="description">{profileData.description}</p>
    </div>
  );
};

export default Card;
