import { data } from "./data";
import Styles from "./project.module.css";
export default function Project() {
  return (
    <>
      <div className={Styles.projectContainer}>
        {data.map((item) => (
          <>
            <div className={Styles.card}>
              <div className={Styles.in}>
                <div className={Styles.imageDiv}>
                  <img src={item.img} className={Styles.image} />
                </div>
                <div>
                  <h2>
                    <p>{item.title}</p>
                  </h2>
                  <hr />
                </div>
                <div>
                  <p>{item.description}</p>
                  <hr />
                </div>
                <div>
                  <p>
                    <b>Technology used </b>: {item.technology}
                  </p>
                  <hr />
                </div>
                <div>
                  <p>
                    Github Repo:{" "}
                    <a href={item.github} target="_blank">
                      Github
                    </a>
                  </p>
                </div>
                <hr />

                {item.server && (
                  <>
                    <div>
                      <p>
                        Server :&nbsp;
                        <a href={item.server} target="_blank">
                          Start server
                        </a>
                      </p>
                    </div>
                    <hr />
                  </>
                )}

                <div>
                  <p>
                    Demo :{" "}
                    <a href={item.demo} target="_blank">
                      Live Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
