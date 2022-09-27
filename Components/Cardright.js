import Link from "next/link";
import Image from "next/image";
import img from "../public/photo2.jpg";

import styles from "../styles/card.module.scss";

export function Cardright() {
  return (
    <div
      data-aos="flip-down"
      data-aos-duration="600"
      className={styles.cardright}
    >
      <div className={styles.card_text}>
        <h3>Personal team dedicated to your growth and success</h3>
        <p>
          Each customer and financing request is handled by a dedicated team
          invested in your success.
        </p>
        <Link href={"/"}>
          <a className="main_link">See all benefits</a>
        </Link>
      </div>
      <div className={styles.card_photo}>
        <Image src={img} width={590} height={400} alt="" />
      </div>
    </div>
  );
}
