import Link from "next/link";
import Image from "next/image";
import icon1 from "../public/icon1.svg";
import icon2 from "../public/icon2.svg";
import icon3 from "../public/icon3.svg";
import styles from "../styles/icons.module.scss";

export function Icons() {
  return (
    <section>
      <div className={styles.icons}>
        <h2>Your partner in funding</h2>
        <div className={styles.icons_all}>
          <div className={styles.icons_card}>
            <Image alt="" src={icon1} />
            <p className={styles.p19}>Equipment Financing</p>
            <p>
              Get the equipment you need with the financing that’s right for
              you.
            </p>
          </div>
          <div className={styles.icons_card}>
            <Image alt="" src={icon2} />
            <p className={styles.p19}>Flexible Structures</p>
            <p>
              We’ll work with you to determine which payment structure suits
              your business.
            </p>
          </div>{" "}
          <div className={styles.icons_card}>
            <Image alt="" src={icon3} />
            <p className={styles.p19}>Simple Process</p>
            <p>
              Fast and easy process with most applications approved within 48
              hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
