import Image from "next/image";
import Link from "next/link";

import img1 from "../../public/about/StephanieTaylor.jpg";
import ln from "../../public/about/ln.svg";
import styles from "../../styles/team.module.scss";

export function Team() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.container_team}
    >
      <div className={styles.team_all}>
        <div className={styles.president}>
          <h3>Meet Our President</h3>
          <Image src={img1} width={229} height={293} alt="Stephanie Taylor" />
          <p>Stephanie Taylor</p>

          <br />
          <span>PRESIDENT</span>
          <br />
          <div className={styles.img}>
            <Link href={"/"}>
              <Image src={ln} alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          <h3>Meet Our President</h3>
          <p>
            Stephanie Taylor started her career in the fitness industry during
            her time at Elon University working at the campus gym. Over the
            following years, she continued expanding her knowledge within the
            fitness world, working at the Columbia Association in Maryland,
            E-Zone, and ACE. Stephanie then decided to shift her focus, spending
            the next 12 years on a rewarding and accomplished career in the
            finance industry.
            <br />
            <br /> In 2008, she ultimately found a way to combine her experience
            and interest of both the fitness and finance industry, when she
            joined the finance division at Cybex International.
            <br />
            <br /> After 8 years of working on the Cybex team, Stephanie joined
            Macrolease, where she expanded her business and developed a robust
            portfolio, providing funding for a wide variety of industry segments
            nationwide.
            <br />
            <br /> In 2023, Stephanie founded Broad Fit Financial, creating
            financing solutions specifically to support the growth and success
            of clients, partners, and suppliers within the wellness industry.
            Broad Fit works collaboratively with their well-established network
            to secure the best funding solutions possible for their customers.
          </p>
        </div>
      </div>
    </div>
  );
}
