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

import styles from "../styles/section.module.scss";

export function Section() {
  return (
    <section>
      <div className={styles.container_section}>
        <div className={styles.section}>
          <div className={styles.section_card}>
            <Image src={img1} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img2} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img3} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img4} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img5} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img6} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img7} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img8} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img9} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img10} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
          <div className={styles.section_card}>
            <Image src={img11} alt="" />
            <h4>Fitness and Mindful Movement Facilities</h4>
            <p>
              Helping companies in the fitness market acquire the equipment they
              need to start, expand and grow their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
