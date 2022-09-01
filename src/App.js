import './App.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Services from './components/Services/Services'
import Myprojects from "./components/Myprojects/Myprojects"
import Aboutme from "./components/Aboutme/Aboutme"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Profile />
    <Services />
    <Myprojects />
    <Aboutme />
    <Contact />
    <Footer />


    </>
  );
}

export default App;
