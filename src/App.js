import { Routes, Route, Navigate } from "react-router-dom"
import Calendar from './page/calendar'
import moment from 'moment';


function App() {

  return (
    <>
      <Routes>
        <Route path="/year/:year/month/:month" element={ <Calendar /> } />
        <Route path="/" element={ <Calendar /> } />
      </Routes>
    </>
  );
}

export default App;
