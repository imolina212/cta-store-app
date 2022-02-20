import axios from "axios";
//DEPENDENCIES
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


//COMPONENTS
import NavBar from "./Components/NavBar"

//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

function App() {
  <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/products" element={<Index />}/>
        <Route path="/products/:id" element={<Show />}/>
        <Route path="/products/new" element={<New />}/>
        <Route path="/products/:id/edit" element={<Edit />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </>

  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${API}/test`)
  //     .then(
  //       (response) => {
  //         setDays(response.data);
  //       },
  //       (error) => console.log("get", error)
  //     )
  //     .catch((c) => console.warn("catch", c));
  // }, []);
  return (
    <div>
      {/* <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
