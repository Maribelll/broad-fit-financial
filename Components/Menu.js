import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import style from "../styles/menu.module.scss";

export function Menu() {
  return (
    <div className={style.menu_up}>
      <div className={style.logo_up}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={235} height={71} />
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <a>SECTORS</a>
        </Link>

        <Link href={"/"}>
          <a>BENEFITS</a>
        </Link>

        <Link href={"/"}>
          <a>PROCESS</a>
        </Link>
      </div>
      <div>
        <Link href={"/"}>
          <a>ABOUT</a>
        </Link>

        <Link href={"/contact"}>
          <a>
            <button className="dark_blue">CONTACT</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
