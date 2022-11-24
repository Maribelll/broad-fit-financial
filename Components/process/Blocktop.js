import Image from "next/image";
import lines from "../../public/sectors/lines.svg";
import lines2 from "../../public/footer2.png";

import styles from "../../styles/blocktop.module.scss";

export function Blocktop() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.blocktop}>
        <div id={styles.blocktop_text} className={styles.blocktop_text}>
          <p className={styles.gold}>PROCESS</p>
          <h1 id="h2">Simple process from A to Z</h1>
          <p>
            We want to make it as simple as possible to get your equipment
            financed quickly and painlessly.
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
