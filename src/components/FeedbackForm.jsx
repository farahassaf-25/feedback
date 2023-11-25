import { useState, useContext, useEffect } from "react"
import Button from "./shared/Button";
import Rating from "./Rating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackFrom() {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleSubmit = (e) => {
        e.preventDefault() //to prevent default behavior
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating, 
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

    return(
        <form className="card" onSubmit={handleSubmit}>
            <div className="container">
                <Rating select={setRating} selected={rating}/>
                <h2>How would you rate your experience with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </div>
        </form> 
    )
}

export default FeedbackFrom