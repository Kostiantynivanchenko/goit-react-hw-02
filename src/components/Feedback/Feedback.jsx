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
  typeFeedback: PropTypes.string.isRequired,
  totalFeedback: PropTypes.string.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
