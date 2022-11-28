import styles from "../../styles/blocktopabout.module.scss";
import Image from "next/image";

import lines2 from "../../public/about_line2.png";
import lines3 from "../../public/footer2.png";

export function Blocktopabout() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.line2}>
        <Image src={lines2} alt="" />
      </div>
      <div className={styles.blocktop}>
        <div className={styles.blocktop_text}>
          <h1>Transparency. Integrity. Communication. Trust.</h1>
        </div>
        <div className={styles.blocktop_text2}>
          <p>
            Broad Fit Financial is committed to the success and growth of our
            industry suppliers and customers by offering financing options and
            support for projects primarily in the fitness, health, and wellness
            markets.
          </p>
        </div>
      </div>
      <div className={styles.blocktop_img2}>
        <Image src={lines3} alt="" />
      </div>
    </div>
  );
}
