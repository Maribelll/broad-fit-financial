import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import style from "../styles/menuadapt.module.scss";
import logoadapt from "../public/logo_adapt.png";

export function Menuadapt() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo_up}>
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={186} height={47} />
          </Link>
        </div>
        <input className={style.menuBtn} type="checkbox" id={style.menuBtn} />
        <label className={style.menuIcon} forhtml={style.menuBtn}>
          <span className={style.navicon}></span>
        </label>

        <ul className={style.menu_ul}>
          <div className={style.logo_up_adapt}>
            <Link href={"/"}>
              <Image src={logoadapt} alt="logo" width={186} height={47} />
            </Link>
          </div>
          <input className={style.menuBtn} type="checkbox" id={style.menuBtn} />
          <label className={style.menuIcon} forhtml={style.menuBtn}>
            <span className={style.navicon}></span>
          </label>
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
      </nav>
    </>
  );
}
