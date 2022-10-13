import styles from "../../styles/ask.module.scss";

export function Ask() {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={styles.container_twocolumns}
      >
        <h2>Frequently Asked Questions</h2>
        <div className={styles.twocolumns}>
          <div className={styles.col1}>
            <div className={styles.card}>
              <h5>Sample Questions?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Sample Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Sample Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            {" "}
            <div className={styles.card}>
              <h5>Sample Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Sample Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Sample Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
