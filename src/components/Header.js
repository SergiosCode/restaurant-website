import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>dine</h1>
      <PageText>
        <h2>Exquisite dining since 1989 </h2>
        <h3>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</h3>
      </PageText>
      <BookButton>BOOK A TABLE</BookButton>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  font-family: Spartan;
  color: white;
  height: 95vh;
  position: relative;
  overflow-x: hidden;
  padding-left: 100px;
  h1 {
    padding-top: 10px;
    font-size: 40px;
    font-weight: light;
  }

  h2 {
    padding-top: 100px;
    font-size: 64px;
    font-weight: 100;
    width: 60vh;
  }

  h3 {
    font-size: 17px;
    font-weight: 100;
    letter-spacing: 0.12rem;
    line-height: 1.8;
    width: 52vh;
  }

  &:before {
    background: url("./images/homepage/hero-bg-desktop.jpg") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const PageText = styled.div`
  width: 20%;

  h1 {
    font-size: 30px;
  }
`;

const BookButton = styled.button`
  margin-top: 50px;
  color: white;
  background-color: rgb(17, 17, 17);
  border: 2px white solid;
  width: 280px;
  height: 70px;
  letter-spacing: 0.2rem;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(249, 249, 249);
    color: black;
    transition: 250ms;
  }
`;
