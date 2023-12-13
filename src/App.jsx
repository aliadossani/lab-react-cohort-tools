import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (

    <div className="App relative z-20 pt-20">

      <Navbar />

      <div className="pages">
        <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='/students/:studentId' element={<StudentDetailsPage />}> </Route>
          <Route path='/profile' element={<UserProfilePage />}> </Route>

          <Route path='*' element={<h1>404 Page not found</h1>}> </Route>

        </Routes>
      </div>

    </div>
  );
}

export default App;
