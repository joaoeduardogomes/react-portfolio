import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "João Eduardo",
    description: "About João Eduardo, web developer focused on clean and maintainable code."
}

export default function About() {
  return (
    <>
      <img src="/images/avatar-nobg.png" alt="" />
      <div className={styles['scoffee-bar']}>
        <p>Coffee</p>
        <p>80/100</p>
        <progress value="80" max="100"></progress>
      </div>

      <table className={styles.infoTable}>
        <caption className="visually-hidden">Basic Information</caption>
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>João Eduardo</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">Role</th>
            <td>Web Developer</td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>Brazil</td>
          </tr>
        </tbody>
      </table>

      <h1>About Me</h1>
      <p>
        I'm a juniot full-stack web developer. I like to keep the front end simple and intuitive. On the back end, I organize the logic and data — the parts most people never see. I work mainly with Python and Flask, and I use JavaScript when it makes sense.
      </p>
      <p>自己紹介</p>
    </>
  );
}
