import "./about.css";
import photo from "../img/me";
export default function Default() {
  return (
    <div className="container">
      <div className="row m-4">
        <div className="col-sm-4" id="photo-container">
          <div>
            <img src={photo} alt="foto" id="photo" />
          </div>
        </div>

        <div className="col-sm-8" id="textAbout">
          <h2>Hi!</h2>
          <p className="text_about">
            My name is Cabrera Alejandro. <br />
            I'm 31 years old and I'm from Argentina. <br />
            I have started as a technician repairing computers, then I took some
            computer courses and now I am starting as a fullstack developer.
            <br />
            This is my first app, probably a simple one, but it will be the
            first step of my entire developer career!
          </p>
        </div>
      </div>
      <div className="row m-4 feed presentCard">
        <h4 className="text-white">Contact</h4>
        <div className="social col-sm">
          <div className="socialBlock">
            <a
              href="https://www.instagram.com/alejandrocabrera029/?hl=es-la"
              target="_blank"
              className="fa fa-instagram"
            ></a>
            <span style={{ color: "rgb(251, 44, 99)" }}>Instagram</span>
          </div>
          <div className="socialBlock">
            <a
              href="https://www.linkedin.com/in/alejandro-cabrera-7b13a7177/"
              target="_blank"
              className="fa fa-linkedin"
            ></a>
            <span style={{ color: "aqua" }}>Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
