import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&order=desc');
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    // TODO: Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    const addFeedback = async (newFeedback) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newFeedback)
        };
        const response = await fetch('/feedback', requestOptions);
        const data = await response.json();
        
        setFeedback([data, ...feedback])
    }
    

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .catch(err => console.log(err));

            setFeedback(feedback.filter((item) => item.id !== id))
        }    
    }

    // TODO: Update Feedback Item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updItem)
        });

        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? data : item));
    }
    // const updateFeedback = (id, updItem) => {
    //     setFeedback(feedback.map((item) => item.id === id ? updItem : item));
    // }



    return <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext