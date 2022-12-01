import Link from "next/link";
import Image from "next/image";
import img from "../public/photo2.jpg";

import styles from "../styles/card.module.scss";

export function Cardright() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.cardright}
    >
      <div style={{ maxWidth: "405px" }} className={styles.card_text}>
        <h3>Health &amp; wellness finance experts that know your industry</h3>
        <p style={{ maxWidth: "390px" }}>
          We have a long history working with an expansive network of suppliers
          and partners throughout the health, wellness, and fitness spaces.
        </p>
        <Link href={"/why_broad_fit"}>
          <a className="main_link">See our network</a>
        </Link>
      </div>
      <div className={styles.card_photo}>
        <Image
          src={img}
          width={590}
          height={400}
          alt="People working out using various gym equipment."
        />
      </div>
    </div>
  );
}
