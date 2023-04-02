import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
           <Route index element={<HomePage />}/>
            <Route path='auth'>
              <Route path='login' element={<LoginPage />}/>
              <Route path='register' element={<RegisterPage />}/>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
