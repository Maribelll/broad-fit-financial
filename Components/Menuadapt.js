import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import style from "../styles/menuadapt.module.scss";
import logoadapt from "../public/logo_ul.svg";

export function Menuadapt() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo_up}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={186} height={47} />
          </Link>
        </div>

        <input className={style.menuBtn} type="checkbox" id={style.menuBtn} />
        <label className={style.menuIcon} forhtml={style.menuBtn}>
          <span className={style.navicon}></span>
        </label>

        <ul className={style.menu_ul}>
          <div className={style.ul_text}>
            <div className={style.logo_up_adapt}>
              <Link href={"/"}>
                <Image src={logoadapt} alt="logo" width={186} height={47} />
              </Link>
            </div>

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
          </div>

          <div className={style.filter}></div>
        </ul>
      </nav>
    </>
  );
}
