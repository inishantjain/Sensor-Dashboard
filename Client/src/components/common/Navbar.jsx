import React from "react";
import {NavLink } from "react-router-dom";
import { styled } from "styled-components";
const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.4rem;
  grid-column: 1/-1;

  p {
    color: hsl(240, 74%, 17%);
    font-weight: 600;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
  }      
  .active > li{

        background-color: hsla(333, 88%, 52%, 1);
        color: #ffffff;

    }
  
  li {
      /* background-color: hsla(144, 21%, 85%, 1); */
      color: #000000;
      border: 1px solid hsla(333, 88%, 52%, 1);
      border-radius: 0.4rem;
      padding: 0.5rem;
      color: black;
      cursor: pointer;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <p>Sensor Dashboard</p>
      <ul>
        <NavLink to={"/"}>
          <li>Insights</li>
        </NavLink>
        <NavLink to={"/dashboard"}>
          <li>Dashboard</li>
        </NavLink>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;



