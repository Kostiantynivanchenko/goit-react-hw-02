import { useEffect, useState } from "react";
import "./App.module.css";
import Description from "./Description.jsx";
import Options from "../components/Options.jsx";
import Feedback from "./Feedback.jsx";
import Notification from "./Notification.jsx";

function App() {
  const [typeFeedback, setTypeFeedback] = useState(() => {
    const storageItem = JSON.parse(localStorage.getItem("typeFeedback"));
    if (storageItem) {
      return storageItem;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback =
    typeFeedback.good + typeFeedback.neutral + typeFeedback.bad;
  // const positiveFeedback = (totalFeedback > 0
  // ? Math.round((typeFeedback.good / totalFeedback) * 100)
  // : 0);
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((typeFeedback.good / totalFeedback) * 100)
      : 0;

  useEffect(() => {
    localStorage.setItem("typeFeedback", JSON.stringify(typeFeedback));
  }, [typeFeedback]);

  function updateFeedback(feedbackType) {
    setTypeFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: ++prevState[feedbackType],
    }));
  }

  function resetFeedback() {
    setTypeFeedback({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        typeFeedback={typeFeedback}
        updateFeedback={updateFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          typeFeedback={typeFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
