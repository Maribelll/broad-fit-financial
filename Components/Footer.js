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
          <Link href={"/"}>
            <Image src={logo} alt="" />
          </Link>
          <div className={styles.footer_contacts}>
            <div className={styles.col1}>
              <ul>
                <li>Broad Fit Financial</li>
                <li>6585 Hypoluxo Road, Suite 251, Lake Worth, FL 33467</li>
                <li>(561) 450-8454</li>
                <li>
                  <a href="mailto:info@broadfit.com">info@broadfit.com</a>
                </li>
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
                  <Link href={"/why_broad_fit"}>
                    <a>Why Broad Fit</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/markets"}>
                    <a>Markets</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/partners_&_memberships"}>
                    <a>Partners &amp; Memberships</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.col3}>
              {" "}
              <ul>
                <li>
                  <Link href={"/about"}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/faq"}>
                    <a>FAQ</a>
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
          {/* <a
            href={"https://www.linkedin.com/in/stephanie-taylor-3902455/"}
            target="_blanc"
          >
            <span className={styles.in}>
              <Image src={lin} alt="linkidin" />
            </span>
          </a> */}
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
          <div>
            {" "}
            <Link href={"/policy/cookie_policy"}>
              <a>COOKIE POLICY</a>
            </Link>
          </div>
          <div className={styles.terms}>
            {" "}
            <Link href={"/policy/privacy_policy"}>
              <a>PRIVACY POLICY</a>
            </Link>
          </div>
          <div className={styles.terms}>
            <Link href={"/policy/terms_&_conditions"}>
              <a>TERMS &amp; CONDITIONS</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
