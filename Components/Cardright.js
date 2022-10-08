import Link from "next/link";
import Image from "next/image";
import img from "../public/photo2.jpg";

import styles from "../styles/card.module.scss";

export function Cardright() {
  return (
    <div data-aos="fade-up" className={styles.cardright}>
      <div style={{ maxWidth: "405px" }} className={styles.card_text}>
        <h3>Transparent process to secure the best financing</h3>
        <p style={{ maxWidth: "390px" }}>
          From selecting a vendor to securing equipment financing, our process
          is fast and easy.
        </p>
        <Link href={"/"}>
          <a className="main_link">Learn more</a>
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
