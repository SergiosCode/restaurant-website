import React from "react";
import styled from "styled-components";

function Events() {
  return (
    <Container>
      <ImageContainer>
        <img src="images/homepage/family-gathering-desktop.jpg" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
          <g fill="none" fill-rule="evenodd">
            <path fill="#9E7F66" d="M15 3h56v1H15z" />
            <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
          </g>
        </svg>
      </ImageContainer>
      <ImageText>
        <h1>Family Gathering</h1>
        <h3>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</h3>
        <BookButton>BOOK A TABLE</BookButton>
        <EventOptions>
          <h2>Family Gathering</h2>
          <h2>Special Events</h2>
          <h2>Social Events</h2>
        </EventOptions>
      </ImageText>
    </Container>
  );
}

export default Events;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const ImageContainer = styled.div`
  margin-left: 10%;
  margin-top: 10%;

  img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 60%) 0px 16px 10px -10px;
  }

  svg {
    position: relative;
    bottom: 140px;
    right: -520px;
    z-index: -1;
  }
`;

const ImageText = styled.div`
  margin-left: 100px;
  margin-top: 200px;
  h1 {
    font-size: 40px;
  }

  h3 {
    width: 55%;
    font-weight: 100;
  }
`;

const BookButton = styled.button`
  flex: none;
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
    border: 2px black solid;
    color: black;
    transition: 250ms;
  }
`;

const EventOptions = styled.div`
  margin-top: 16%;
  h2 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(128, 128, 128);
    transition: 250ms;
    width: 20%;

    &:hover {
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
