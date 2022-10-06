import Link from "next/link";
import Image from "next/image";
import lines from "../public/footer.svg";
import lines2 from "../public/footer2.png";
import logo from "../public/logo_footer.svg";
import lin from "../public/in.svg";
import styles from "../styles/footer.module.scss";

export function Footer() {
  return (
    <div className={styles.container_footer}>
      <div className={styles.footer}>
        <div className={styles.footer_text}>
          <Image src={logo} alt="" />
          <div className={styles.footer_contacts}>
            <div className={styles.col1}>
              <ul>
                <li>Broad Fit Financial</li>
                <li>(222)222-2222</li>
                <li>info@broadfitfinancial.com</li>
              </ul>
            </div>
            <div className={styles.col2}>
              {" "}
              <ul>
                <li>
                  <Link href={"/"}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/sectors"}>
                    <a>Markets</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/benefits"}>
                    <a>Benefits</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.col3}>
              {" "}
              <ul>
                <li>
                  <Link href={"/process"}>
                    <a>Process</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    <a>About</a>
                  </Link>
                </li>

                <li>
                  <Link href={"/contact"}>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a href={"/"} target="_blanc">
            <span className={styles.in}>
              <Image src={lin} alt="linkidin" />
            </span>
          </a>
        </div>
        <div className={styles.empty}></div>
      </div>
      <div className={styles.footer_img}>
        <Image src={lines} alt="" />
      </div>
      <div className={styles.footer_img2}>
        <Image src={lines2} alt="" />
      </div>
      <hr />
      <div className={styles.rights}>
        <div className={styles.rights_all}>
          &copy; 2022 BROAD FIT FINANCIAL / ALL RIGHTS RESERVED
        </div>
        <div className={styles.rights_all2}>
          &copy; BROAD FIT FINANCIL / ALL RIGHTS RESERVED
        </div>
        <div className={styles.privacy}>
          <div>PRIVACY POLICY</div>
          <div className={styles.terms}>TERMS &amp; CONDITIONS</div>
        </div>
      </div>
    </div>
  );
}
