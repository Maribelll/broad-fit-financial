import Image from "next/image";
import img from "../public/Rectlogo.png";
import styles from "../styles/team.module.scss";

export function Clients() {
  return (
    <div id={styles.clients} className={styles.container_team}>
      <h3>Proudly affiliated with</h3>
      <div className={styles.team}>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
