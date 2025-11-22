import { Link } from "react-router-dom";
import Styles from "./contact.module.css";
import { useState } from "react";
export default function Contact() {
  const [isSubmited, setisSubmited] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmited(!isSubmited);
    const formData = new FormData(e.target);

    formData.append("access_key", "fa23dc9b-a494-4c50-a234-4c3ecf9ec824");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const ThankYou = (
    <>
      <div className={Styles.thankYou}>
        <h1>THANK YOU</h1>
      </div>
    </>
  );
  return (
    <>
      <div className={Styles.container}></div>
      {isSubmited ? (
        ThankYou
      ) : (
        <div className={`${Styles.Div} ${Styles.leftDiv}`}>
          <div className={Styles.Contact}>
            <h1>
              Contact &ensp;
              <img
                className={Styles.contactlogo}
                src="https://cdn-icons-gif.flaticon.com/13896/13896489.gif"
              />
            </h1>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className={Styles.name}>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className={Styles.name}>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className={Styles.name}>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className={Styles.auther}>
            <h3>Get In Touch</h3>
            <h4>
              Hi, I'm Sohel Shaikh, a passionate Full Stack Developer. Let's
              connect and discuss coding, projects, or tech trends!
            </h4>
            <h3>My Address</h3>
            <p>
              <img
                className={Styles.autherLogo}
                src="https://cdn-icons-gif.flaticon.com/10606/10606398.gif"
              />
              Pune, Maharashtra
            </p>
            <p>
              <img
                className={Styles.autherLogo}
                src="https://cdn-icons-gif.flaticon.com/14984/14984766.gif"
              />
              <a href="tel://90964-38838">+91 9096438838</a>
            </p>
            <p>
              <img
                className={Styles.autherLogo}
                src="https://cdn-icons-gif.flaticon.com/8717/8717939.gif"
              />
              <a href="mailto:shaikhsohel0082@gmail.com">
                <span className={Styles.email}>shaikhsohel0082@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
      )}
      <div className={`${Styles.Div} ${Styles.rightDiv}`}>
        <div className={Styles.orbit1}>
          <Link
            to={"https://www.linkedin.com/in/73405-sohel-shaikh/"}
            target={"_blank"}
          >
            <div className={`${Styles.circle} ${Styles.linkedIn}`}></div>
          </Link>
        </div>
        <div className={Styles.orbit2}>
          <Link to={"https://github.com/shaikhsohel0082"} target={"_blank"}>
            <div className={`${Styles.circle} ${Styles.gitHub}`}></div>
          </Link>
        </div>
        <div className={Styles.orbit3}>
          <Link
            to={"https://www.instagram.com/s_o_h_e_l_____s_h_a_i_k_h/"}
            target={"_blank"}
          >
            <div className={`${Styles.circle} ${Styles.insta}`}></div>
          </Link>
        </div>
      </div>
    </>
  );
}
