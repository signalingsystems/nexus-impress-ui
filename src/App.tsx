
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import QuizPage from "./pages/QuizPage";


function App() {

  return (
    <>
      <MenuBar />
      <BrowserRouter>
      <Routes>
      <Route path="/quiz" Component={QuizPage}/>
      </Routes>

        
      </BrowserRouter>


    </>
  )
}

export default App;
