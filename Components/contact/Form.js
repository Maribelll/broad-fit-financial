import styles from "../../styles/form.module.scss";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function Form() {
  const [state, handleSubmit] = useForm("mvoyzkgw");

  if (state.succeeded) {
    return (
      <div className={styles.thanks}>
        <div className={styles.thanks_block}>
          <h2>Thank you!</h2>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            We’ll be in touch.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section>
      <div className={styles.container_form}>
        <div className={styles.form_header}>
          <h2>Get in touch</h2>
          <p>
            We’re here to provide you with more information and answer any
            questions you may have.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label for="phone">Phone</label>

          <input id="phone" type="number" name="phone" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          <label for="Message">Message</label>
          <textarea id="message" name="message" type="text" rows="4" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <ValidationError className={styles.error} errors={state.errors} />
          <div className={styles.but}>
            <button
              style={{ width: "134px" }}
              className="dark_blue"
              type="submit"
              disabled={state.submitting}
            >
              Contact
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
