import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    if (!feedback || !Array.isArray(feedback) || feedback.length === 0) {
        return <div>No feedback available</div>;
    }

    const average =
        feedback.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0) / feedback.length;

    const formattedAverage = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : formattedAverage}</h4>
        </div>
    );
}

export default FeedbackStats;
