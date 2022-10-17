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
              We’ll work together to determine which option is the best fit for
              your business and goals.
            </p>
          </div>
          <div className={styles.icons_card}>
            <Image alt="" src={icon2} />
            <p className={styles.p19}>Your Partner in Financing</p>
            <p>
              We advocate on your behalf for the best terms available for your
              specific needs.
            </p>
          </div>{" "}
          <div className={styles.icons_card}>
            <Image alt="" src={icon3} />
            <p className={styles.p19}>Fast, Streamlined Process</p>
            <p>
              Regardless of your market segment, finance amount, or equipment
              type, our process to secure the funds you need is fast and
              seamless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
