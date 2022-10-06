import styles from "../styles/error.module.scss";
import { Action } from "../Components/Action";
import { Footer } from "../Components/Footer";
import { Menu } from "../Components/Menu";

export default function NotFoundPage() {
  return (
    <>
      <Menu />
      <div className={styles.container_blocktop}>
        <div className={styles.blocktop}>
          <div className={styles.blocktop_text}>
            <p className={styles.gold}>404</p>
            <h1 id="h2">Oops, there’s nothing here.</h1>
          </div>
        </div>
      </div>
      <Action />
      <Footer />
    </>
  );
}
