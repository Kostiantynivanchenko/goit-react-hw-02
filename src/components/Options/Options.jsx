import styles from "./Options.module.css";
import PropTypes from "prop-types";

export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={styles.button_container}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={styles.button}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={styles.button}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={styles.button}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.button}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};
