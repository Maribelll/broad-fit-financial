import styles from "../../styles/reviews.module.scss";

export function Reviews() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id={styles.backg}
      className={styles.container_reviews}
    >
      <div className={styles.reviews}>
        <h4>
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor&rdquo;
        </h4>
        <p>NAME / COMPANY</p>
      </div>
    </div>
  );
}
