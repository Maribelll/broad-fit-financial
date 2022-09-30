import styles from "../../styles/payment.module.scss";

export function Payment() {
  return (
    <div className={styles.container_payment}>
      <div className={styles.payment}>
        <div className={styles.payment_title}>
          <h3>Flexible payment structures designed for your business.</h3>
          <p>
            Our team of experienced financial professionals stays on top of each
            client &rsquo;s request and ensures success from start to finish.
          </p>
        </div>
        <div className={styles.payment_details}>
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
          </div>
          <div className={styles.col2}>
            <div className={styles.elem}>
              <h5>Structure</h5>
              <p>100% financing, 1st payment due at signing.</p>
            </div>
            <div className={styles.elem}>
              <h5>Payments</h5>
              <p>Average benchmark of $2000 per every $100,000..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
