import FeedbackFrom from "./components/FeedbackForm";
import Header from "./components/Header"; 
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackFrom />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>  
            
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink/>
          
        </div>
        </Router>
      </FeedbackProvider>
  )
} 

export default App;

/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */