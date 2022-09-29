import Link from "next/link";
import Image from "next/image";
import icon1 from "../public/sectors/icon1.svg";
import icon2 from "../public/sectors/icon2.svg";
import icon3 from "../public/sectors/icon3.svg";
import styles from "../styles/iconsectors.module.scss";

export function Iconssectors() {
  return (
    <section className={styles.container_icons}>
      <div
        // data-aos-duration="200"
        data-aos="fade-up"
        className={styles.icons}
      >
        <h2>Tailored financial support to fit your unique needs.</h2>
        <div className={styles.icons_all}>
          <div className={styles.icons_card}>
            <Image alt="" src={icon1} />
            <p className={styles.p19}>Flexible Payment Structures</p>
            <p>
              Flexible structures from annual payments to interest only to step
              up options. We’ll work together to determine which option is the
              best fit for your business.
            </p>
          </div>
          <div className={styles.icons_card}>
            <Image alt="" src={icon2} />
            <p className={styles.p19}>Businesses of Any Size</p>
            <p>
              We work with anyone who provides a fitness offering, whether
              that’s a single-store small business or a publicly traded
              corporation.
            </p>
          </div>{" "}
          <div className={styles.icons_card}>
            <Image alt="" src={icon3} />
            <p className={styles.p19}>Fast, Streamlined Process</p>
            <p>
              No matter the industry, financing amount or equipment type, our
              process to secure financing is fast and clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
