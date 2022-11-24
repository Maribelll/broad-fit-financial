import styles from "../../styles/payment.module.scss";

export function Payment() {
  return (
    <div className={styles.container_payment}>
      <div className={styles.payment}>
        <div className={styles.payment_title}>
          <h3>Flexible payment structures designed for your business.</h3>
          <p>
            Our team of finance specialists are actively involved in the support
            and success of every client’s goals from start to finish. We offer a
            variety of terms and structures including 100% financing, no down
            payment, and no security deposit required. We offer capital leases,
            operating leases, equipment finance agreements, and master leases.
            We will work together to determine which option is the best fit for
            your business &amp; goals.
          </p>
        </div>
        {/* <div className={styles.payment_details}>
          <div className={styles.col1}>
            <div className={styles.elem}>
              <h5>Terms</h5>
              <p>36, 48, or 60 months terms.</p>
            </div>
            <div className={styles.elem}>
              <h5>Types</h5>
              <p>
                Capital Leasing a.k.a. $1 Purchase Option, Operating Leasing
                a.k.a. Fair Market Value (FMV), or Equipment Finance Agreements
                (EFA).
              </p>
            </div>
          </div> */}
        {/* <div className={styles.col2}>
            <div className={styles.elem}>
              <h5>Structure</h5>
              <p>100% financing, 1st payment due at signing.</p>
            </div>
            <div className={styles.elem}>
              <h5>Payments</h5>
              <p>Average benchmark of $2000 per every $100,000..</p>
            </div>
          </div> */}
      </div>
    </div>
  );
}
