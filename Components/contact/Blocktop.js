import styles from "../../styles/blocktopcontact.module.scss";
import lines1 from "../../public/Lines1_contact.svg";
import lines2 from "../../public/lines2_contact.svg";
import Image from "next/image";

export function Blocktopcontact() {
  return (
    <div className={styles.container_blocktop}>
      <div className={styles.blocktop}>
        <div className={styles.blocktop_text}>
          <p className={styles.gold}>CONTACT&mdash;</p>
          <h1 style={{ color: "white" }} id="h2">
            We’re here to help.
          </h1>
          <p>
            To get in touch, call us at (561) 450-8454, send an email to
            info@broadfit.com, or fill out the form below.
          </p>
        </div>
        <div className={styles.blocktop_img}>
          <Image src={lines1} alt="" />
        </div>
        <div className={styles.blocktop_img2}>
          <Image src={lines2} alt="" />
        </div>
      </div>
    </div>
  );
}
