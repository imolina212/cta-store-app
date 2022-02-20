//DEPENDENCIES
import { Routes, Route } from "react-router-dom";

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
  return (
    <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/products" element={<Index />}/>
          {/* <Route path="/products/:id" element={<Show />}/>
          <Route path="/products/new" element={<New />}/>
          <Route path="/products/:id/edit" element={<Edit />}/>
          <Route path="*" element={<Error />}/> */}
        </Routes>
      </>
  );
}
export default App;
