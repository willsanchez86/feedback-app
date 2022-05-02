import {useState} from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        <>
            <Header text="Feedback UI"/>
            <div className='container'> 
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>

        </>
    )
}

export default App









/* Must return one parent element - Can be wrapped in empty fragments ('<></>) */

// Can return non-jsx element by using React.createElement