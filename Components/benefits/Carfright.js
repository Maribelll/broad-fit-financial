import Link from "next/link";
import Image from "next/image";
import img from "../../public/image2.jpg";

import styles from "../../styles/card.module.scss";

export function Cardright() {
  return (
    <div
      style={{ marginRight: "16px", marginLeft: "16px" }}
      className={styles.helping}
    >
      <div
        className={styles.cardright}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.card_text}>
          <h3>We work with you to determine the best financing structure</h3>
          <p>
            When you work with us, we become partners in the project and your
            success is our success. Our team will be there for you, working in
            your best interest, and guiding you through the process.
          </p>
        </div>
        <div className={styles.card_photo}>
          <Image src={img} width={590} height={400} alt="Physical therapy" />
        </div>
      </div>
    </div>
  );
}
