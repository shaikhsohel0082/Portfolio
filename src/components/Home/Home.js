import Styles from "./home.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className={Styles.about}>
        <TypeAnimation
          splitter={(str) => str.split(/(?= )/)}
          sequence={[
            `Hello!👋 I'm Sohel Shaikh, a dynamic full-stack web developer trained at Coding Ninjas. My expertise spans HTML, CSS, JavaScript, React, and Node.js. Driven by a fervent commitment to crafting clean, efficient code, I have dedicated myself to building responsive and user-friendly web applications that elevate user experiences.`,
            15000,
            "",
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          omitDeletionAnimation={true}
          style={{ fontSize: "1em", display: "inline", minHeight: "200px" }}
          repeat={Infinity}
        />
      </div>
      <div>
        
      </div>

      <section className={Styles.section}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </>
  );
}
