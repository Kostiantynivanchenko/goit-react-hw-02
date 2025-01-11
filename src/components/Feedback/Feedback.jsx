import style from "./Feedback.module.css";
import PropTypes from "prop-types";

export default function Feedback({
  typeFeedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={style.list}>
      <li>Good: {typeFeedback.good}</li>
      <li>Neutral: {typeFeedback.neutral}</li>
      <li>Bad: {typeFeedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}

Feedback.propTypes = {
  typeFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
