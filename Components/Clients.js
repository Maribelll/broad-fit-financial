import Image from "next/image";
import img1 from "../public/clients/1.png";
import img2 from "../public/clients/2.png";
import img3 from "../public/clients/3.png";
import img4 from "../public/clients/4.jpg";
import img5 from "../public/clients/5.jpg";

import styles from "../styles/team.module.scss";

export function Clients() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id={styles.clients}
      className={styles.container_team}
    >
      <h3>Memberships with</h3>
      <div className={styles.team}>
        <div className={styles.card_photo}>
          <Image src={img1} height={62} width={auto} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img2} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img3} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img4} alt="" />
        </div>
        <div className={styles.card_photo}>
          <Image src={img5} alt="" />
        </div>
      </div>
    </div>
  );
}
