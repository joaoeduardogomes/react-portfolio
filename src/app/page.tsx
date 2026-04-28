import { Metadata } from "next";
import styles from "./page.module.scss";
import CoffeeBar from "./components/CoffeeBar";

export const metadata: Metadata = {
  title: "João Eduardo",
  description: "About João Eduardo, web developer focused on clean and maintainable code."
}

export default function About() {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.user}>
          <img src="/images/avatar-nobg.png" alt="avatar" />
          <CoffeeBar />
        </div>
        <table className={styles['info-table']}>
          <caption className="visually-hidden">Basic Information</caption>
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>João Eduardo</td>
            </tr>
            <tr>
              <th scope="row">Age</th>
              <td>33</td>
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
      </section>



      <h1 className={styles.about}>About Me</h1>

      <div className={styles['description-wrap']}>
        <p className={styles.description}>
          I'm a junior full-stack web developer. I like to keep the front end simple and intuitive. On the back end, I organize the logic and data — the parts most people never see. I work mainly with Python and Flask, and I use JavaScript for the front end.
        </p>

        <span className={styles['presentation-tag']}>
          <span className={styles.presentation}>自己紹介</span>
          <img src="/images/pin.png" alt="" aria-hidden="true" />
        </span>
      </div>
    </>
  );
}
