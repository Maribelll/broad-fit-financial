import Image from "next/image";
import img1 from "../public/sectors/1-fitness.jpg";
import img2 from "../public/sectors/2-sports.jpg";
import img3 from "../public/sectors/3-performance.jpg";
import img4 from "../public/sectors/4-multifamily.jpg";
import img5 from "../public/sectors/5-rehab.jpg";
import img6 from "../public/sectors/6-commercial.jpg";
import img7 from "../public/sectors/9-active.jpg";
import img8 from "../public/sectors/8-ymcas.jpg";
import img9 from "../public/sectors/9-franchises.jpg";
import img11 from "../public/sectors/10-schools.jpg";
import img12 from "../public/sectors/11-municipalities.jpg";
import img13 from "../public/sectors/12-countryclubs.jpg";
import img14 from "../public/sectors/13-corporate.jpg";
import img15 from "../public/sectors/14-hospitality.jpg";
import img16 from "../public/sectors/15-recovery.jpg";
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
              Helping companies acquire the equipment they need to open, expand,
              and grow their operations.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img2} alt="Professional Sports" />
            <h4>Professional Sports</h4>
            <p>
              Supporting professional organizations with financing for fields,
              courts, locker rooms, training facilities, score boards, and more.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img3} alt="Performance Training" />
            <h4>Performance Training</h4>
            <p>Financing equipment for athletic training facilities.</p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img4} alt="Multi-Family" />
            <h4>Multi-Family</h4>
            <p>
              Financing equipment for HOAs, condos, apartments, and residential
              communities.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img5} alt=" Rehabilitation" />
            <h4> Rehabilitation</h4>
            <p>
              Helping physical therapy facilities, spas, and pain management
              clinics finance recovery equipment.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img6} alt="Commercial Office Buildings" />
            <h4>Commercial Office Buildings</h4>
            <p>
              Financing a wide array of collateral for office buildings
              including fitness facilities, restaurants, corporate equipment,
              and furniture.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img7} alt="Senior Communities" />
            <h4>Senior Communities</h4>
            <p>Providing financing solutions for active senior communities.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img8} alt="YMCAs, JCCs and Non-Profits" />
            <h4>YMCAs, JCCs, KROC Centers, &amp; Other Non-Profits:</h4>
            <p>
              Supporting community organizations with playgrounds, fitness
              centers, furniture, pools and more.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img9} alt="Franchises" />
            <h4>Franchises</h4>
            <p>
              Equipment financing for franchises in the health and wellness
              markets.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img11} alt="Еducation" />
            <h4>Education</h4>
            <p>
              Partnering with schools and universities to provide financing for
              all facility needs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className={styles.section_card}
          >
            <Image src={img12} alt="Parks and Recreation" />
            <h4>Parks &amp; Recreation</h4>
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
            <h4>Country Clubs, Golf Clubs &amp; Tennis Clubs</h4>
            <p>
              Financing private and public facilities with locker rooms, fitness
              centers, restaurants, lighting, greens, courts &amp; more.
            </p>
          </div>
          <div data-aos="fade-up" className={styles.section_card}>
            <Image src={img14} alt="Corporate Wellness" />
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
            <Image src={img15} alt="Hospitality" />
            <h4>Hospitality</h4>
            <p>
              Financing for hotels, resorts, and other hospitality-based
              businesses to outfit their locations.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.section_card}
          >
            <Image src={img16} alt="Recovery" />
            <h4>Recovery</h4>
            <p>
              Financing solutions for businesses providing recovery and
              rehabilitation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
