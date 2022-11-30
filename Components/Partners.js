import Image from "next/image";
import img1 from "../public/partners/partners/partner-1.jpg";
import img2 from "../public/partners/partners/partner-2.jpg";
import img3 from "../public/partners/partners/partner-3.jpg";
import img4 from "../public/partners/partners/partner-4.jpg";
import img5 from "../public/partners/partners/partner-5.jpg";
import img6 from "../public/partners/partners/partner-6.jpg";
import img7 from "../public/partners/partners/partner-7.jpg";

import styles from "../styles/partners.module.scss";

export function Allpartners() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id={styles.clients}
      className={styles.container_partners}
    >
      <div className={styles.part1}>
        <div className={styles.img}>
          <a href={"https://www.ymcaspbc.org/"} target="_blanc">
            <Image src={img1} width={99} height={82} alt="" />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://jcca.org/"} target="_blanc">
            <Image
              className={styles.img}
              src={img2}
              height={82}
              width={108}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://www.kroccenter.org/"} target="_blanc">
            <Image
              className={styles.img}
              src={img3}
              height={82}
              width={377}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.img}>
          <a href={"https://www.advantagefitness.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img4}
              height={82}
              width={216}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://aktivsolutions.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img5}
              height={82}
              width={190}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://americanbarbell.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img6}
              height={82}
              width={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://www.myarsenalstrength.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img7}
              height={82}
              width={222}
              alt=""
            />
          </a>
        </div>
        {/* <div className={styles.img}>
          <a href={"https://www.kroccenter.org/"} target="_blanc">
            <Image
              className={styles.img}
              src={img4}
              height={62}
              width={191}
              alt=""
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}
