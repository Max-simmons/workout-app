import React from 'react';
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate();

    const newWorkout = () => {
        navigate('/newWorkout');
    }

    return(
        <>
        <h2>Welcome, Gym rat</h2>

        <button onClick={newWorkout}>New Workout</button>
        <button>Past Workouts</button>
    
        </>
    )
}

export default HomePage;