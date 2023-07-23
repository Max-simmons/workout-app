import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function WorkoutsPage() {
const params = useParams();
const dispatch = useDispatch();
const bodyPartId = params.id;

useEffect(() => {
    dispatch({
        type: 'FETCH_WORKOUTS',
        payload: bodyPartId
    })
})


return (
        <h2>Workouts</h2>

)
}

export default WorkoutsPage;