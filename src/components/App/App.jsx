import {
  BrowserRouter,
  Route,
  Routes

} from 'react-router-dom';
import './App.css';

import HomePage from '../HomePage/HomePage';
import FindWorkout from '../FindWorkout/FindWorkout';
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';


function App() {
  return (
    
    
    <div className="App">
      <BrowserRouter>

      <Routes>
      <Route excat path ="/" element={<HomePage />}>
      </Route>

      <Route excat path ="/newWorkout" element={<FindWorkout />}>
      </Route>

      <Route excat path= "/newWorkout/workouts/:id" element={<WorkoutsPage />}>
      </Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
