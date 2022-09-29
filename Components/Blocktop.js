import Link from "next/link";
import Image from "next/image";
import lines from "../public/sectors/lines.svg";
import lines2 from "../public/footer2.png";

import styles from "../styles/blocktop.module.scss";

export function Blocktop() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.blocktop}>
        <div className={styles.blocktop_text}>
          <p className={styles.gold}>PROCESS&mdash;</p>
          <h2>Markets we serve</h2>
          <p>
            We offer financing to a broad range of companies looking to create,
            upgrade or expand their fitness environments.
          </p>
        </div>
        <div className={styles.blocktop_img}>
          <Image src={lines} alt="" />
        </div>
        <div className={styles.blocktop_img2}>
          <Image src={lines2} alt="" />
        </div>
      </div>
    </div>
  );
}
