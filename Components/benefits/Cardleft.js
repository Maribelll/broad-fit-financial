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
      <div className={styles.cardleft}>
        <div className={styles.card_photo}>
          <Image src={img} width={590} height={400} alt="" />
        </div>
        <div className={styles.card_text}>
          <h3>We work with you to determine the best financing structure</h3>
          <p>
            We offer flexible structures based on the needs of your specific
            project with no hidden payments or questionable fees. Our work
            ensures the success of your project from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
}
