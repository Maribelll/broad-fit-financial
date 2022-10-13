import styles from "../../styles/blocktopcontact.module.scss";
import { Action } from "../contact/Action";

export function Blocktopcontact() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.blocktop}>
        <div className={styles.blocktop_text}>
          <p className={styles.gold}>CONTACT&mdash;</p>
          <h1 id="h2">We’re here to help.</h1>
        </div>
        <div className={styles.blocktop_text2}></div>
        <Action />
      </div>
    </div>
  );
}
