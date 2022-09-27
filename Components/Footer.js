import Link from "next/link";
import Image from "next/image";
import lines from "../public/footer.png";
import logo from "../public/logo_footer.svg";
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
                <li>Overview</li>
                <li>Markets</li>
                <li>Benefits</li>
              </ul>
            </div>
            <div className={styles.col3}>
              {" "}
              <ul>
                <li>
                  <Link href={"/"}>
                    <a>Process</a>
                  </Link>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <span className={styles.in}>in</span>
        </div>
        <div className={styles.footer_img}>
          <Image src={lines} alt="" />
        </div>
      </div>
      <hr />
      <div className={styles.rights}>
        <div>ALL RIGHTS RESERVED &copy; 2022 BROAD FIT FINANCIAL</div>
        <div>
          PRIVACY POLICY
          <span style={{ paddingLeft: "31px" }}>TERMS &amp; CONDITIONS</span>
        </div>
      </div>
    </div>
  );
}
