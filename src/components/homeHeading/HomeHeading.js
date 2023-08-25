import Typewriter from "typewriter-effect";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import "./HomeHeadingStyle.css";

const HomeHeading = () => {
  const btnText = "LET'S TALK";

  return (
    <>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <h1 className="font-color home-heading-text">
          <span className="home-heading-text-normal">
            SUCCESS YOUR BUSINESS
          </span>

          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Excellent IT services for your success")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <div className="home-heading-button">
        <ButtonComponent btnText={btnText} />
      </div>
    </>
  );
};

export default HomeHeading;
