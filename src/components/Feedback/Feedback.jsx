import style from "./Feedback.module.css";

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
