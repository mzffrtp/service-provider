import react from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import useApi from './hooks/useApi';
import CategoryDetails from './pages/categoryDetails/categoryDetails';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { setCategories } from './redux/categoriesSlice';
import styles from "../src/App.module.css"

function App() {
  const { categoriesState } = useSelector((state) => state);
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((res) => {
        dispatch(setCategories(res.data.data))
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route index element={<HomePage />} />

            <Route path= "category">
              <Route path=':slug' element={<CategoryDetails />} />
            </Route >
            <Route path='auth'>
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
