import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/process/1.svg";
import img2 from "../../public/process/2.svg";
import img3 from "../../public/process/3.svg";
import img4 from "../../public/process/4.svg";
import img5 from "../../public/process/5.svg";
import img6 from "../../public/process/6.svg";

import styles from "../../styles/stage.module.scss";

export function Stage() {
  return (
    <div className={styles.container_stage}>
      <div className={styles.stage}>
        <div className={styles.stage_left}>
          <div className={styles.stage_card}>
            <Image src={img1} alt="" />
            <h4>
              Submit
              <br /> Application
            </h4>
          </div>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
        </div>
        <div className={styles.stage_right}>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
          <div className={styles.stage_card}>
            <Image src={img2} alt="" />
            <h4>
              Credit <br />
              Review
            </h4>
          </div>
        </div>
        <div className={styles.stage_left}>
          <div className={styles.stage_card}>
            <Image src={img3} alt="" />
            <h4>Documentation</h4>
          </div>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
        </div>
        <div className={styles.stage_right}>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
          <div className={styles.stage_card}>
            <Image src={img4} alt="" />
            <h4>
              Order <br /> Equipment
            </h4>
          </div>
        </div>
        <div className={styles.stage_left}>
          <div className={styles.stage_card}>
            <Image src={img5} alt="" />
            <h4>
              Delivery &amp; <br />
              Acceptance
            </h4>
          </div>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
        </div>
        <div className={styles.stage_right}>
          <div className={styles.stage_text}>
            <p>
              Submit a quick credit application with all the required
              information.
            </p>
          </div>
          <div className={styles.stage_card}>
            <Image src={img6} alt="" />
            <h4>
              Enjoy your new <br />
              equipment!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
