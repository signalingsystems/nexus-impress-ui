
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Layout } from 'antd';
import Foot from "./components/Footer";

function App() {
  const { Header, Content, Footer } = Layout;
  // #15191d
  const bgColor ='#fff';

  return (
    <Provider store={store}>
      <Layout>
        <Header style={{background:bgColor}}>
          <MenuBar  />
        </Header>
        <Content style={{ padding: '0 50px',background:bgColor,minHeight:"90vh" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/quiz" Component={QuizPage} />
              <Route path="/profile" Component={Profile} />
            </Routes>
          </BrowserRouter>
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>



    </Provider>
  )
}

export default App;
