import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function FindWorkout() {

    const navigate = useNavigate();

    const [bodyPartId, setBodyPartId] = useState('');

    const showWorkouts = () => {
        console.log('clicked');
        navigate(`/newWorkout/workouts/${bodyPartId}`); 
    }

    return(
        <>
        <h2>What are we hitting?</h2>
        <select onChange={(event) => Number(setBodyPartId(event.target.value))}>
            <option value=''>Day of the Week</option>
            <option value='1'>Chest</option>
            <option value='2'>Lower Back</option>
            <option value='11'>Upper Back</option>
            <option value='6'>Quads</option>
            <option value='7'>Glute</option>
            <option value='8'>Hamstings</option>
            <option value='1'>Calves</option> 
            <option value='8'>Shoulders</option> 
            <option value='9'>Traps</option> 
            <option value='10'>Triceps</option>
            <option value='4'>Biceps</option>  
            <option value='12'>Core</option> 
        </select>
        <button onClick={showWorkouts}>Show Workouts</button>

        <h2>Current Workout</h2>
        </>
    )

}

export default FindWorkout;