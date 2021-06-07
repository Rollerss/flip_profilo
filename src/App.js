import profileData from "./profileData.js";
import "./App.css";
import CardHolder from "./components/CardHolder";

function App() {
  return (
    <div className="content">
      <div class="portfolio-items" id="portfolio">
        {profileData.map((item, index) => {
          return <CardHolder key={index} profileData={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
