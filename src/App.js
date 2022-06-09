import './App.css';
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './feature/modeSlice';

const App = () => {

  const { mode } = useSelector(state => state.mode);
  console.log(mode, mode === "light")

  const dispatch = useDispatch();

  const handleToggleDarkMode = modeDark => {
    dispatch(toggleDarkMode({ mode: modeDark }));
  }

  return (
    <ThemeProvider theme={{ theme: mode }}>
      <Container>
        <h1>My Dark Theme is better than yours</h1>
        {/* <input type="checkbox" className="checkbox" id="checkbox" /> */}
        <Labelball>
          <BsMoonStarsFill color="white" onClick={() => handleToggleDarkMode("dark")} />
          <BsFillSunFill color="yellow" onClick={() => handleToggleDarkMode("light")} />
          {/* {
            mode === "light" ?
            <BsMoonStarsFill color="white" onClick={() => handleToggleDarkMode("dark")} />
              :
              <BsFillSunFill color="yellow" onClick={() => handleToggleDarkMode("light")} />
          } */}
        </Labelball>
      </Container>
    </ThemeProvider>
  );
}

export default App;

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  background-color: ${backgroundColor};
  color: ${textColor};

  &:before{
    .checkbox:checked + .sc-gsnTZi kSegFK .sc-dkzDqf bTBScO{
      transform: translateX(24px);
    }
  }
`;

const Labelball = styled.label`
  htmlFor: 'checkbox';
  width: 45px;
  height: 14px;
  background-color:#111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${textColor};
  position: absolute;
  // top: 2px;
  // left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;