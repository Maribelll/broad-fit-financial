import Image from "next/image";
import img from "../../public/Rect.png";
import img1 from "../../public/team/Image1.jpg";
import styles from "../../styles/team.module.scss";

export function Team() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.container_team}
    >
      <h3>Meet the Team</h3>
      <div className={styles.team}>
        <div className={styles.card_photo}>
          <Image src={img1} width={229} height={293} alt="Stephanie Taylor" />
          <p>Stephanie Taylor</p>

          <br />
          <span>CEO</span>
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
