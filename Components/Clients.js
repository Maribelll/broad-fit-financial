import styles from "../styles/clients.module.scss";

export function Clients() {
  return (
    <section>
      <div className={styles.container_twocolumns}>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          What our clients are saying
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.twocolumns}
        >
          <div className={styles.card}>
            <p>
              I’ve had the pleasure of working with Stephanie Taylor for 15
              years. During this time, she has assisted my clients with creative
              solutions to help them achieve their goal of opening their dream
              business or refreshing current spaces.  She is trustworthy and a
              hard worker, always willing to go the extra mile for the perfect
              lending solution.  The thanks I receive from customers after
              referring them to Stephanie is all the proof I need that she is
              always the right partner for me.
            </p>
            <span>Dan Kilby</span>
            <p className={styles.label}>Gym Source Commercial Sales</p>
          </div>
          <div className={styles.card}>
            <p>
              I&lsquo;ve worked with Stephanie for 20+ years in a variety of
              roles.  She has always provided both myself, my customers, and my
              team members with a high level of support and service.  Her
              knowledge and communication always created a more trusting and
              open experience for my team and customers.  Grateful to have her
              as a financing resource for my customers. 
            </p>
            <span>Rod Karstetter</span>
            <p className={styles.label}>
              Strategic Account Manager, Peloton Interactive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
