import { useState } from "react";
import styles from "./Options.module.css";

export default function Options({
  totalFeedback,
  typeFeedback,
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
