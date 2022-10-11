import Link from "next/link";
import Image from "next/image";
import img from "../../public/image1.jpg";
import styles from "../../styles/card.module.scss";

export function Cardleft() {
  return (
    <div
      style={{ marginRight: "16px", marginLeft: "16px" }}
      className={styles.helping}
    >
      <div
        className={styles.cardleft}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.card_photo}>
          <Image
            src={img}
            width={590}
            height={400}
            alt="Stacked fitness equipment"
          />
        </div>
        <div className={styles.card_text}>
          <h3>We approach every project with honesty and transparency</h3>
          <p>
            When you work with us, you’re more than a file number. Your assigned
            team will be there for you, working in your best interest, and guide
            you through the entire financing process.
          </p>
        </div>
      </div>
    </div>
  );
}
