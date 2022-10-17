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
          <p className={styles.gold}>ABOUT BROAD FIT FINANCIAL&mdash;</p>
          <h1>Your success and growth is our top priority.</h1>
        </div>
        <div className={styles.blocktop_text2}>
          <p>
            With over 25 years in the fitness industry, from direct sales to
            equipment financing, we have a clear understanding of how to best
            support our customers, vendors, manufacturers, and lenders. <br />
            <br />
            Knowing what is required by all parties allows us to appropriately
            accommodate the needs of all involved in each transaction, every
            time. <br />
            <br />
            Providing creative structuring, alternative solutions, and
            developing financing options to best work with each individual
            scenario is where we excel.
          </p>
        </div>
      </div>
      <div className={styles.blocktop_img2}>
        <Image src={lines3} alt="" />
      </div>
    </div>
  );
}
