import Home from "./pages/Home"; 
import UserProfile from "./pages/userProfile";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {

  return(
    <>   
    <nav>
      <button>ChangeTheme</button>  
    </nav>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user-profile/:id' element={<UserProfile/>}/>
          <Route path="*" element={<NotFound />} />

        </Routes>
    
    </>

  );
}

export default App
