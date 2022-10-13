import styles from "../styles/twocolumns.module.scss";

export function Twocolumns() {
  return (
    <section>
      <div className={styles.container_twocolumns}>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Equipment financing made easy
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.twocolumns}
        >
          <div className={styles.col1}>
            <div className={styles.card}>
              <h5>Flexible Financing</h5>
              <p>
                A variety of financing structures are available such as monthly,
                quarterly, or annual payments or deferment, interest only, and
                step-up options.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Truly Personalized Service</h5>
              <p>
                Your dedicated team members are always available to answer
                questions and support you.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Utilize Financing</h5>
              <p>
                Conserve your working capital and take advantage of the tax
                benefits available on leased equipment while keeping your cash
                available for other needs.
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            {" "}
            <div className={styles.card}>
              <h5>Solutions for Any Size Business</h5>
              <p>
                We work with all types of businesses from large Corporations
                with no personal guarantors to franchisees with individual
                owners. Structuring is specific to each transaction.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Trusted Partner</h5>
              <p>
                We take great pride in our level of support, knowledge, &amp;
                ability to secure the best structure and program for our
                customers. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
