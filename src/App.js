import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthPage';
import { useEffect, useState } from 'react';
import Who from './components/card/Who';
import ByMe from './components/ByMe/ByMe';
import FifthScreen from './screens/FifthScreen';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
  return <>
  <div class="wrap">
  <NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <ForthScreen/>
  <Who/>

<ThirdScreen/>
  <SecondScreen/>
  <ByMe/>
  </div>
  </>
}

export default App;
