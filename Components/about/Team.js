import Image from "next/image";
import img from "../../public/Rect.png";
import styles from "../../styles/team.module.scss";

export function Team() {
  return (
    <div className={styles.container_team}>
      <h3>Meet the Team</h3>
      <div className={styles.team}>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
          <p>Name</p>

          <br />
          <span>TITLE</span>
        </div>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
          <p>Name</p>

          <br />
          <span>TITLE</span>
        </div>
        <div className={styles.card_photo}>
          <Image src={img} alt="" />
          <p>Name</p>

          <br />
          <span>TITLE</span>
        </div>
      </div>
    </div>
  );
}
