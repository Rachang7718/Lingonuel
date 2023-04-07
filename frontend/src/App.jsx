import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Login from './page/Login'
import Register from './page/register'
import Landing from './page/landing'
import Home from './page/home'
import Profile from './page/profile'
import Vocabulary from './page/vocabulary'
import VocabularyA1 from './page/vocabularyA1'
import VocabularyB1 from './page/vocabularyB1'
import Learning from './page/learning'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/vocabulary' element={<Vocabulary/>}></Route>
        <Route path='/vocabulary-a1-a2' element={<VocabularyA1/>}></Route>
        <Route path='/vocabulary-b1-b2' element={<VocabularyB1/>}></Route>
        <Route path='/learning' element={<Learning/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
