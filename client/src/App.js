import React, { useState } from "react";

import Login from "./pages/Login";

import { Link } from "react-router-dom";
import { IMG_URL } from "./constants/constants";

import styled from "styled-components";
import theme from "./GlobalStyle/Theme";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import AskCoronaGo from "././pages/AskCoronaGo";

import Modal from "react-responsive-modal";

const ErrorComp = styled.p``;

const LoginCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  text-align: center;
`;

function App(props) {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleLogin = () => {
    setisUserLoggedIn(true);
  };
  const handleErrors = () => {
    setErrorMessage("Please check your credentials");
  };
  const handleLogout = () => {
    sessionStorage.clear();
    setisUserLoggedIn(false);
  };

  const onOpenModal = () => {
    setShowDialog(true);
  };

  const onCloseModal = () => {
    setShowDialog(false);
  };

  return (
    <div className="App">
      {isUserLoggedIn && sessionStorage.getItem("JWT") !== null ? (
        <div>
          {/* <Link to="/">Home</Link>
          <Link to="/affiliates">affiliates</Link>
          <Link to="/ask-corona-go">Get your facts straight</Link>
          <Link to="/search-for-a-friend">Find a Friend</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/fileupload">Test Link</Link> */}
          <Modal open={showDialog} onClose={onCloseModal}>
            <AskCoronaGo />
          </Modal>
          {props.children}
          {/* <Toast
            title="Hello there"
            text="It's over, Anakin! I have the high ground!"
            canCancel
          /> */}
          <button style={style_coronaBotBtn} onClick={onOpenModal}>
            <svg
              style={style_coronaBot}
              fill={theme.colors.primary}
              data-name="Слой 1"
              id="Слой_1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M120,56a8,8,0,0,0-7.74,6H102a37.86,37.86,0,0,0-9.72-23.4l7.31-7.31a8,8,0,1,0-2.83-2.83L89.4,35.77A37.86,37.86,0,0,0,66,26.05V15.74a8,8,0,1,0-4,0V26.05a37.86,37.86,0,0,0-23.4,9.72l-7.31-7.31a8,8,0,1,0-2.83,2.83l7.31,7.31A37.86,37.86,0,0,0,26.05,62H15.74a8,8,0,1,0,0,4H26.05a37.86,37.86,0,0,0,9.72,23.4l-7.31,7.31a8,8,0,1,0,2.83,2.83l7.31-7.31A37.86,37.86,0,0,0,62,102v10.31a8,8,0,1,0,4,0V102a37.86,37.86,0,0,0,23.4-9.72l7.31,7.31a8,8,0,1,0,2.83-2.83L92.23,89.4A37.86,37.86,0,0,0,102,66h10.31A8,8,0,1,0,120,56ZM100.77,21.57A4,4,0,1,1,99.6,24.4,4,4,0,0,1,100.77,21.57ZM60,8a4,4,0,1,1,4,4A4,4,0,0,1,60,8ZM21.57,27.23a4,4,0,0,1,5.66-5.66,4,4,0,0,1-5.66,5.66ZM8,68a4,4,0,1,1,4-4A4,4,0,0,1,8,68Zm19.23,38.43a4,4,0,0,1-5.66-5.66,4,4,0,0,1,5.66,5.66ZM68,120a4,4,0,1,1-4-4A4,4,0,0,1,68,120Zm38.43-19.23a4,4,0,0,1-5.66,5.66,4,4,0,0,1,5.66-5.66ZM64,98A34,34,0,1,1,98,64,34,34,0,0,1,64,98Zm56-30a4,4,0,1,1,4-4A4,4,0,0,1,120,68Z" />
              <path d="M40.34,58.34a8,8,0,1,0,11.32,0A8,8,0,0,0,40.34,58.34Zm8.49,8.49a4,4,0,1,1,0-5.66A4,4,0,0,1,48.83,66.83Z" />
              <path d="M58.34,40.34a8,8,0,1,0,11.32,0A8,8,0,0,0,58.34,40.34Zm8.49,8.49a4,4,0,1,1,0-5.66A4,4,0,0,1,66.83,48.83Z" />
              <path d="M76.34,58.34a8,8,0,1,0,11.32,0A8,8,0,0,0,76.34,58.34Zm8.49,8.49a4,4,0,1,1,0-5.66A4,4,0,0,1,84.83,66.83Z" />
              <path d="M58.34,76.34a8,8,0,1,0,11.32,0A8,8,0,0,0,58.34,76.34Zm8.49,8.49a4,4,0,1,1,0-5.66A4,4,0,0,1,66.83,84.83Z" />
            </svg>
          </button>
          <Navbar />
        </div>
      ) : (
        <LoginCont>
          <Login updateLoginStatus={handleLogin} updateErrors={handleErrors} />
          <ErrorComp>{errorMessage}</ErrorComp>
        </LoginCont>
      )}
    </div>
  );
}

const style_coronaBot = {
  width: "72px",
  backgroundColor: `${theme.colors.bg}`,
  padding: "8px",
  borderRadius: "50px",
  zIndex: "11"
};

const style_coronaBotBtn = {
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  position: "fixed",
  bottom: "10rem",
  right: "0.8rem",
  zIndex: "11"
};

export default App;
