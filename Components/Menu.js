import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import style from "../styles/menu.module.scss";
import { Menuadapt } from "./Menuadapt";

export function Menu() {
  return (
    <>
      <div className={style.menu_up}>
        <div className={style.logo_up}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={213} height={54} />
          </Link>
        </div>
        <div>
          <Link href={"/why_broad_fit"}>
            <a>Why Broad Fit</a>
          </Link>
          <Link href={"/markets"}>
            <a>Markets</a>
          </Link>

          <Link href={"/partners_&_memberships"}>
            <a>Partners &amp; Memberships</a>
          </Link>

          <Link href={"/about"}>
            <a>About</a>
          </Link>
          <Link href={"/faq"}>
            <a>FAQ</a>
          </Link>
        </div>
        <div>
          <Link href={"/contact"}>
            <a style={{ paddingRight: "0" }}>
              <button className="dark_blue">Contact</button>
            </a>
          </Link>
        </div>
      </div>
      <Menuadapt />
    </>
  );
}
