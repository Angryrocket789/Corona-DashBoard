import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.aboutBox}>
      <p>
        Visualization by : <span>AngryRocket789</span>
      </p>
      <p>
        data : <span>WorldOMeter</span>
      </p>
    </div>
  );
};

export default About;
