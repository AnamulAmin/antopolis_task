import teamWorkImage from "../../assets/images/team_work.png";
import environmentImage from "../../assets/images/enviroment.png";
import "./get_to_know.css";
function GetToKnow() {
  return (
    <section id="get_to_know">
      <h2 className="heading container">
        Get To <span>Know</span>
      </h2>
      {/* team work content area */}
      <div className="container get_to_know_content">
        <div className="get_to_know_image">
          <img src={teamWorkImage} style={{ width: "100%" }} />
        </div>
        <div className="get_to_know_text">
          <h3>
            <span>Teamwork </span>
            is the key to our sucess
          </h3>
          <p className="">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
      {/* environment content area */}
      <div className="container get_to_know_content environment">
        <div className="get_to_know_text">
          <h3>
            We are all in for the <span>environment </span>
          </h3>
          <p className="">
            TasteNow donates $1 penny for every purchase made from the app to an
            organization that takes care of our enviromet. We belive that with
            everyone´s help, we can make a better world.
          </p>
        </div>
        <div className="get_to_know_image">
          <img src={environmentImage} style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
}

export default GetToKnow;
