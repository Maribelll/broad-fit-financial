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
          <h2>Your success and growth is our top priority.</h2>
        </div>
        <div className={styles.blocktop_text2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={styles.blocktop_img2}>
        <Image src={lines3} alt="" />
      </div>
    </div>
  );
}
