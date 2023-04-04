import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
          Personal Digital Assistants
          </p>
          </div>
        </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon"/>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana99"
                image={CortanaImage}
                description="Cortana was created by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri99" image={SiriImage} description="Siri was created by Apple"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
