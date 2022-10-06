import Image from "next/image";
import img1 from "../public/sectors/1-fitness.jpg";
import img2 from "../public/sectors/2-restorative.jpg";
import img3 from "../public/sectors/3-ymcas.jpg";
import img4 from "../public/sectors/4-commercial.jpg";
import img5 from "../public/sectors/5-corporate.jpg";
import img6 from "../public/sectors/6-homeowners.jpg";
import img7 from "../public/sectors/7-schools.jpg";
import img8 from "../public/sectors/8-nutrition.jpg";
import img9 from "../public/sectors/9-active.jpg";
import img10 from "../public/sectors/10-health.jpg";
import img11 from "../public/sectors/11-municipalities.jpg";
import img12 from "../public/sectors/12-health.jpg";
import img13 from "../public/sectors/13-municipalities.jpg";

import styles from "../styles/section.module.scss";

export function Section() {
  return (
    <section>
      <div className={styles.container_section}>
        <div className={styles.section}>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img1} alt="" />
            <h4>Fitness Centers</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img12} alt="" />
            <h4>Professional Sports</h4>
            <p>
              Supporting professional sport teams with financing for sports
              fields, basketball courts, locker rooms and more.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img8} alt="" />
            <h4>Nutrition and Healthy Eating</h4>
            <p>
              We work with stores and restaurants that offer nutrition and
              healthy food options as part of their overall wellness offering.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img6} alt="" />
            <h4>Homeowners’ Associations</h4>
            <p>
              We finance equipment for HOAs/Condos and Co-ops with attractive
              financing structures that meet their needs.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img2} alt="" />
            <h4>Restorative Health</h4>
            <p>
              Supporting physical therapy businesses, spas and pain management
              clinics acquire the equipment needed to help their clients
              recover.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img4} alt="" />
            <h4>Commercial Office Buildings</h4>
            <p>
              We finance a wide array of collateral including fitness,
              restaurant, and office equipment, as well as furniture for office
              buildings.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img9} alt="" />
            <h4>Active Aging</h4>
            <p>Providing financing solutions for Active Aging Communities.</p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img3} alt="" />
            <h4>YMCAs, JCCs &amp; Non-Profits</h4>
            <p>
              Non-profits play a sig­nif­i­cant role in their communities, and
              we are happy to provide them with appealing financing options.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img10} alt="" />
            <h4>Health Care Facilities</h4>
            <p>
              Helping hospitals, clinics, dentists, physical therapists, private
              practices and other healthcare professionals acquire equipment.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img7} alt="" />
            <h4>Schools &amp; Universities</h4>
            <p>
              Whether refreshing existing equipment or outfitting a new
              facility, financing can provide schools the ability to acquire new
              assets when needed.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img11} alt="" />
            <h4>Municipalities</h4>
            <p>Specialized financing for government entities.</p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img13} alt="" />
            <h4>Country Clubs, Golf Clubs &amp; Tennis Clubs</h4>
            <p>
              Helping equip sports clubs facilities with locker rooms, score
              boards, lighting, bleachers, sports fields, basketball courts and
              more.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img5} alt="" />
            <h4>Corporate Wellness</h4>
            <p>
              Helping corporate workplaces promote health and wellness with the
              necessary equipment for their corporate fitness environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
