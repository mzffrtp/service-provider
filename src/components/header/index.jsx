import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthTokenContext } from "../context/authTokenContextProvider";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { removeUserData } from "../../redux/userSlice";
import useSwal from "../../hooks/useSwal";
import { ThemeContext } from "../context/themeContextProvider";


export default function Header() {
  const { userState } = useSelector(state => state)
  const authTokenContextValue = useContext(AuthTokenContext);
  const {theme, setTheme} = useContext(ThemeContext)
  const dispatch = useDispatch();
  const swal = useSwal();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    authTokenContextValue.setToken(null);
    dispatch(removeUserData());

  }
  const onLogoutBtnClick = () => {
    swal
      .fire({
        title: 'Logout?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, go back!',
      })
      .then((result) => {
        if (result.isConfirmed) {
            logoutUser();
            navigate("/")          
        }
      })
    

  }
  return (
    <Container className="{`Header ${theme}`}">
      <div className="d-flex justify-content-between flex-md-row align-items-center p-1 px-md-4 mb-3 my-2 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Service Park</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link
            to={"/"}
            className="p-2 btn btn-outline-info text-dark me-2">Services</Link>
          <Button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          variant="outline-info" className="p-2 me-3 text-dark" href="#"><i className="fa-regular fa-sun me-3"></i><i className="fa-regular fa-moon"></i></Button>
        </nav>
        <nav>
          {
            userState.userData === null ? (
              <>
                <Link
                  to="auth/login"
                  className="btn btn-outline-warning me-2" >Login</Link>
                <Link
                  to="auth/register"
                  className="btn btn-outline-warning me-2" >Register</Link>
              </>
            ) : (
              <Row className="d-flex justify-content-center">
                <Button variant="warning" className="mb-2">
                  <i className="fa-regular fa-circle-user me-1"></i>{userState.userData.firstname}</Button>
                <Button variant="danger"
                  onClick={onLogoutBtnClick} >
                  <i className="fa-solid fa-arrow-right-from-bracket me-1"></i>Logout</Button>
              </Row>

            )
          }
        </nav>
      </div>
    </Container>
  )
}