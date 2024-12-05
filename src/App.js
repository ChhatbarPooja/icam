import logo from './logo.svg';
import './App.css';
import Main_header from "./Components/Header/Header";
import Main_footer from "./Components/Header/footer";
import UserManagement from "./Components/UserManagement/index";
import style from "./Assets/css/style.css";
import style2 from "./Assets/css/style2.css";
import style3 from "./Assets/css/style3.css";
import MyRoutes from './MyRoutes';

function App() {
  return (
    <div className="App grey-bg">
      <Main_header/>
      <MyRoutes/>  
      <Main_footer/>
    </div>
  );
}

export default App;
