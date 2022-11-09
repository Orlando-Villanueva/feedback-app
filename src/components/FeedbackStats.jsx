import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"



function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    // get average rating
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating : {isNaN(average) ? 'N/A' : average}</h4>
        </div>
    )
}

export default FeedbackStats