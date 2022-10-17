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
import img14 from "../public/sectors/14-hospitality.jpg";
import img15 from "../public/sectors/15-recovery.jpg";
import img16 from "../public/sectors/16-franchises.jpg";
import styles from "../styles/section.module.scss";

export function Section() {
  return (
    <section>
      <div className={styles.container_section}>
        <div className={styles.section}>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img1} alt="Fitness Centers" />
            <h4>Fitness Centers</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img12} alt="Professional Sports" />
            <h4>Professional Sports</h4>
            <p>
              Supporting professional sport teams with financing for sports
              fields, basketball courts, locker rooms and more.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img8} alt="Performance Training" />
            <h4>Performance Training</h4>
            <p>We finance equipment for performance training facilities.</p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img6} alt="Homeowners’ Associations" />
            <h4>Homeowners’ Associations</h4>
            <p>
              We finance equipment for HOAs/Condos and Co-ops with attractive
              financing structures that meet their needs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img2} alt="Restorative Health" />
            <h4>Restorative Health</h4>
            <p>
              Supporting physical therapy businesses, spas and pain management
              clinics acquire the equipment needed to help their clients
              recover.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img4} alt="Commercial Office Buildings" />
            <h4>Commercial Office Buildings</h4>
            <p>
              We finance a wide array of collateral including fitness,
              restaurant, and office equipment, as well as furniture for office
              buildings.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img9} alt="Active Aging" />
            <h4>Active Aging</h4>
            <p>Providing financing solutions for Active Aging Communities.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img3} alt="YMCAs, JCCs and Non-Profits" />
            <h4>YMCAs, JCC, KROC Centers, &amp; Other Non-Profits</h4>
            <p>
              Non-profits play a sig­nif­i­cant role in their communities, and
              we are happy to provide them with appealing financing options.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img10} alt="Health Care Facilities" />
            <h4>Health Care Facilities</h4>
            <p>
              Helping hospitals, clinics, dentists, physical therapists, private
              practices and other healthcare professionals acquire equipment.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img7} alt="Schools and Universities" />
            <h4>Schools &amp; Universities</h4>
            <p>
              Whether refreshing existing equipment or outfitting a new
              facility, financing can provide schools the ability to acquire new
              assets when needed.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img11} alt="Municipalities" />
            <h4>Municipalities</h4>
            <p>Specialized financing for government entities.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image
              src={img13}
              alt="Country Clubs, Golf Clubs and Tennis Clubs"
            />
            <h4>Country Clubs, Golf, Tennis, &amp; Swim Clubs</h4>
            <p>
              Helping equip sports clubs facilities with locker rooms, score
              boards, lighting, bleachers, sports fields, basketball courts and
              more.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img5} alt="Corporate Wellness" />
            <h4>Corporate Wellness</h4>
            <p>
              Helping corporate workplaces promote health and wellness with the
              necessary equipment for their corporate fitness environments.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img14} alt="Hospitality" />
            <h4>Hospitality</h4>
            <p>
              We work with hotels, resorts, and other hospitality-based
              businesses to outfit their facilities.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img15} alt="Recovery" />
            <h4>Recovery</h4>
            <p>
              Offering equipment financing solutions for businesses providing
              recovery and rehabilitation services.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img16} alt="Franchises" />
            <h4>Franchises</h4>
            <p>
              Equipment financing for franchises in the health and wellness
              markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
