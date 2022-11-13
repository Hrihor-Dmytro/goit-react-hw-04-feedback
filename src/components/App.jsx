import { useState } from 'react';
import { FeedbackOptions } from './Feetback/FeetbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notifications';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeetback = event => {
    if (event === 'good') {
      setGood(good + 1);
    } else if (event === 'bad') {
      setBad(bad + 1);
    } else if (event === 'neutral') {
      setNeutral(neutral + 1);
    }
  };
  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / (good + neutral + bad)) * 100
  );

  return (
    <div>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        incrementFeetback={incrementFeetback}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feetback given." />
      )}
    </div>
  );
}
