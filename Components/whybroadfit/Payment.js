import styles from "../../styles/payment.module.scss";
import Link from "next/link";

export function Payment() {
  return (
    <div className={styles.container_payment}>
      <div className={styles.payment}>
        <div className={styles.payment_title}>
          <h3>Flexible payment structures designed for your business</h3>
          <p>
            Our team of finance specialists are actively involved in the support
            and success of every client’s goals from start to finish.
            <br />
            <br /> We offer a variety of terms and structures including 100%
            financing, no down payment, and no security deposit required. We
            offer capital leases, operating leases, equipment finance
            agreements, and master leases.
            <br />
            <br /> We will work together to determine which option is the best
            fit for your business.
          </p>
        </div>
        <Link href={"/contact"}>
          <button className="dark_blue">Get in touch</button>
        </Link>
      </div>
    </div>
  );
}
