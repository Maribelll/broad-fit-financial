import Image from "next/image";
import img1 from "../public/clients/1.png";
import img2 from "../public/clients/2.png";
import img3 from "../public/clients/3.png";
import img4 from "../public/clients/4.jpg";
import img5 from "../public/clients/5.jpg";

import styles from "../styles/member.module.scss";

export function Members() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id={styles.clients}
      className={styles.container_team}
    >
      <h3>Memberships with</h3>
      <div>
        <div className={styles.team}>
          <div className={styles.col1}>
            <div className={styles.img}>
              <Image src={img1} height={62} width={123} alt="" />
            </div>
            <div className={styles.img}>
              <Image
                className={styles.img}
                src={img2}
                height={62}
                width={76}
                alt=""
              />
            </div>
            <div className={styles.img}>
              <Image
                className={styles.img}
                src={img3}
                height={62}
                width={132}
                alt=""
              />
            </div>
          </div>

          <div className={styles.col2}>
            <div className={styles.img}>
              <Image
                className={styles.img}
                src={img4}
                height={62}
                width={191}
                alt=""
              />
            </div>
            <div className={styles.img}>
              <Image
                className={styles.img}
                src={img5}
                height={62}
                width={193.1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
