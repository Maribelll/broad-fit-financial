import Link from "next/link";

import styles from "../styles/action.module.scss";

export function Action() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.action}>
      <div className={styles.action_all}>
        <div className={styles.action_card1}>
          <h3>Looking for assistance?</h3>
          <button className="dark_blue">Contact Us</button>
        </div>
        <div className={styles.action_card2}>
          <h3>Ready to apply?</h3>
          <button className="dark_blue">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
