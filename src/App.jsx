import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AllChat from './Components/AllChats/AllChat'
import ChatBox from './Components/ChatBox/chatbox'
import LoadingPage from './Components/LoadingPage/loadingPage'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' exact element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/chatbox' element={<ChatBox/>} />
          <Route path='/allchat' element={<AllChat/>} />
        </Routes>
          
      </Router>
     
    </div>
  )
}

export default App
