import React from "react";
import styled from "styled-components";

function Reservation() {
  return (
    <Container>
      <h1>Ready to make a reservation?</h1>
      <BookButton>BOOK A TABLE</BookButton>
    </Container>
  );
}

export default Reservation;

const Container = styled.div`
  height: 30vh;
  background: url("./images/homepage/ready-bg-desktop.jpg") center center / cover no-repeat;
  display: flex;
  align-items: center;
  h1 {
    color: rgb(249, 249, 249);
    margin-left: 15vh;
    font-size: 40px;
  }
`;

const BookButton = styled.button`
  flex: none;
  margin-left: 50vh;
  color: rgb(249, 249, 249);
  background: none;
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
    border: 2px black solid;
    color: black;
    transition: 250ms;
  }
`;
