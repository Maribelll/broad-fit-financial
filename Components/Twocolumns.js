import styles from "../styles/twocolumns.module.scss";

export function Twocolumns() {
  return (
    <section>
      <div className={styles.container_twocolumns}>
        <h2>Equipment financing made easy</h2>
        <div className={styles.twocolumns}>
          <div className={styles.col1}>
            <div className={styles.card}>
              <h5>Flexible Financing</h5>
              <p>
                Flexible structures from annual payments to interest only to
                step up options.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Truly Personalized Service</h5>
              <p>
                Your dedicated team members are always available to answer
                questions and help your business thrive.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Capitalize on Opportunities</h5>
              <p>
                Conserve working capital and maximize cash flow with lower
                payments and overhead obligations.
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            {" "}
            <div className={styles.card}>
              <h5>Solutions for Any Size Business</h5>
              <p>
                We work with businesses of any size, whether it’s a small
                business just starting out or a large corporation looking to
                finance a project.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Tax Advantages</h5>
              <p>
                Benefit from tax advantages with True Tax Lease or through
                Section 179 benefit.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Trusted Partner</h5>
              <p>
                As your financing partners, we will guide you every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
