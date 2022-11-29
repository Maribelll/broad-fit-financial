import styles from "../styles/ask.module.scss";

export function Ask() {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={styles.container_twocolumns}
      >
        <div className={styles.twocolumns}>
          <div className={styles.col1}>
            <div className={styles.card}>
              <h5>Is there a prepayment penalty?</h5>
              <p>
                No, there is not a fee for early payoff but the payoff amount
                will include the unearned interest through the contract maturity
                date.
              </p>
            </div>
            <div className={styles.card}>
              <h5>What are the terms?</h5>
              <p>
                Most common terms are 36, 48, or 60 months.  Shorter and longer
                terms are available based on loan size and collateral.  Annual,
                quarterly, monthly, etc. terms are available as well.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Will there be a down payment?</h5>
              <p>
                It depends on time in business and strength of the obligor. 
                Typically, only start-ups will have a down payment which will
                vary based on the financial profile.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Do I have to tell you if I relocate the collateral?</h5>
              <p>
                Yes! We must know if the equipment is moved from the location we
                have on file.
              </p>
            </div>
            <div className={styles.card}>
              <h5>
                My vendor requires a deposit before they will put my order into
                production.  Will you pay it?
              </h5>
              <p>
                Yes.  We can release funds in advance and build that into the
                structure.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Can I include different vendors on my loan?</h5>
              <p>
                Yes.  Just send us the quotes from all your vendors and we will
                work with each of them directly throughout the process.
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            {" "}
            <div className={styles.card}>
              <h5>Will this debt show on my personal credit?</h5>
              <p>
                No, we do not make personal loans so it will not appear on
                personal credit.  We lend to businesses and the loan will appear
                on your business reports.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Will you pull my credit?</h5>
              <p>
                If there is a personal guarantor, we will pull a bureau from the
                PG to validate their credit worthiness.
              </p>
            </div>
            <div className={styles.card}>
              <h5>Are there any fees associated with this transaction? </h5>
              <p>
                Yes, there will be a small documentation fee based on loan size
                and the number of schedules drawn.  Documentation fees range
                from $300 - $600.
              </p>
            </div>
            <div className={styles.card}>
              <h5>When do payments start?</h5>
              <p>
                The loan and payments commence once the equipment has been
                delivered.
              </p>
            </div>
            <div className={styles.card}>
              <h5>How long does it take to receive an approval?</h5>
              <p>
                Existing facilities applying under our Application Only program
                will receive decisions within 24 to 48 hours. Requests requiring
                a full financial review will typically take 3 days.
              </p>
            </div>
            <div className={styles.card}>
              <h5>How will I receive my documents?</h5>
              <p>All documents are securely executed via DocuSign.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
