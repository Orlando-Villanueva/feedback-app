import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    // get average rating
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    console.log(average)

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating : {isNaN(average) ? 'N/A' : average}</h4>
        </div>
    )
}

FeedStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats