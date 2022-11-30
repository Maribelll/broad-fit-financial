import Image from "next/image";
import img1 from "../public/partners/partners/partner-1.jpg";
import img2 from "../public/partners/partners/partner-2.jpg";
import img3 from "../public/partners/partners/partner-3.jpg";
import img4 from "../public/partners/partners/partner-4.jpg";
import img5 from "../public/partners/partners/partner-5.jpg";
import img6 from "../public/partners/partners/partner-6.jpg";
import img7 from "../public/partners/partners/partner-7.jpg";
import img8 from "../public/partners/partners/partner-8.jpg";
import img9 from "../public/partners/partners/partner-9.jpg";
import img10 from "../public/partners/partners/partner-10.jpg";
import img11 from "../public/partners/partners/partner-11.jpg";
import img12 from "../public/partners/partners/partner-12.jpg";
import img13 from "../public/partners/partners/partner-13.jpg";
import img14 from "../public/partners/partners/partner-14.jpg";
import img15 from "../public/partners/partners/partner-15.jpg";
import img16 from "../public/partners/partners/partner-16.jpg";
import img17 from "../public/partners/partners/partner-17.jpg";
import img18 from "../public/partners/partners/partner-18.jpg";
import img19 from "../public/partners/partners/partner-19.jpg";
import img20 from "../public/partners/partners/partner-20.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";
// import img7 from "../public/partners/partners/partner-7.jpg";

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

        <div className={styles.img}>
          <a href={"https://www.assaultfitness.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img8}
              width={191}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://www.builtbygrid.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img9}
              width={191}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"http://www.commercialfitness.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img10}
              width={191}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://www.concept2.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img11}
              width={191}
              height={82}
              alt=""
            />
          </a>
        </div>

        <div className={styles.img}>
          <a href={"https://corehandf.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img12}
              width={150}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://design2wellness.com//"} target="_blanc">
            <Image
              className={styles.img}
              src={img13}
              width={113}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://www.mydynamicfitness.com/"} target="_blanc">
            <Image
              className={styles.img}
              src={img14}
              width={232}
              height={82}
              alt=""
            />
          </a>
        </div>
        <div className={styles.img}>
          <a href={"https://echelonfit.com/ "} target="_blanc">
            <Image
              className={styles.img}
              src={img15}
              width={192}
              height={82}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
