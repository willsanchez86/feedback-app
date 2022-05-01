import {useState} from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header text="Feedback UI"/>
            <div className='container'> 
                <FeedbackList feedback={feedback} />
            </div>

        </>
    )
}

export default App









/* Must return one parent element - Can be wrapped in empty fragments ('<></>) */

// Can return non-jsx element by using React.createElement