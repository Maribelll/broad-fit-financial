import Image from "next/image";
import lines from "../../public/sectors/lines.svg";
import lines2 from "../../public/footer2.png";
import styles from "../../styles/blocktop.module.scss";

export function Blocktop() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.blocktop}>
        <div className={styles.blocktop_text}>
          <p className={styles.gold}>Why Broad Fit</p>
          <h1 id="h2">Why partner with us?</h1>
          <p>
            Through our team of experts, you&apos;ll get the equipment financing
            you need with a financing structure that&apos;s right for you.
          </p>
        </div>
        <div className={styles.blocktop_img}>
          <Image src={lines} alt="" />
        </div>
        <div className={styles.blocktop_img2}>
          <Image src={lines2} alt="" />
        </div>
      </div>
    </div>
  );
}
