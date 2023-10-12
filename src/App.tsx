
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";


function App() {

  return (
    <>
      <MenuBar />
      <BrowserRouter>
      <Routes>
      <Route path="/quiz" Component={QuizPage}/>
      <Route path="/profile" Component={Profile}/>
      </Routes>

        
      </BrowserRouter>


    </>
  )
}

export default App;
