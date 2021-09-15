import React from "react";
import styled from "styled-components";

function ReservationPage() {
  return (
    <Container>
      <Top>
        <ReservationText>
          <h1>dine</h1>
          <h2>Resevations</h2>
          <h3>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</h3>
        </ReservationText>
      </Top>
      <WhiteSpace>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="76">
          <g fill="#9E7F66" fill-rule="evenodd">
            <path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
          </g>
        </svg>
      </WhiteSpace>
      <Reservation>
        <Name placeholder="Name"></Name>
        <Email placeholder="Email"></Email>
        <DateArea>
          <h2>Pick a date</h2>
          <Month placeholder="MM"></Month>
          <Day placeholder="DD"></Day>
          <Year placeholder="YYYY"></Year>
        </DateArea>
        <TimeArea>
          <h2>Pick a time</h2>
          <Month placeholder="MM"></Month>
          <Day placeholder="DD"></Day>
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
        </TimeArea>
        <PeopleDiv>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="3">
              <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
            </svg>
          </button>
          <h2>3 people</h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11">
              <path fill="#9E7F66" d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z" />
            </svg>
          </button>
        </PeopleDiv>
        <BookButton>MAKE RESERVATION</BookButton>
      </Reservation>
    </Container>
  );
}

export default ReservationPage;

const Container = styled.div``;

const Top = styled.div`
  height: 60vh;
  padding-left: 100px;
  h1 {
    padding-top: 10px;
    font-size: 40px;
    font-weight: light;
  }
  &:before {
    background: url("./images/booking/hero-bg-desktop.jpg") center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const ReservationText = styled.div`
  color: white;
  h2 {
    margin-top: 15vh;
    font-size: 64px;
    font-weight: 200;
  }

  h3 {
    font-size: 18px;
    font-weight: 100;
    line-height: 1.7;
    width: 25%;
  }
`;

const WhiteSpace = styled.div`
  background: rgb(249, 249, 249);
  height: 30vh;

  svg {
    position: absolute;
    right: 32%;
    top: 77%;
  }
`;
const Reservation = styled.div`
  box-align: center;
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 60%) 0px 16px 10px -10px;
  position: absolute;
  right: 180px;
  top: 250px;
  height: 55vh;
  width: 50vh;
  background: rgb(249, 249, 249);
`;

const Name = styled.input`
  font-size: 20px;
  width: 80%;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: left;
  letter-spacing: 2px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
  margin: 30px 0 0 40px;
  background: rgb(249, 249, 249);
`;

const Email = styled.input`
  font-size: 20px;
  width: 80%;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: left;
  letter-spacing: 2px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
  margin: 30px 0 0 40px;
  background: rgb(249, 249, 249);
`;

const DateArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(249, 249, 249);
  h2 {
    margin: 20px 0 0 40px;
    font-size: 18px;
    width: 37%;
    font-weight: 600;
  }
`;

const Month = styled.input`
  font-size: 20px;
  width: 25%;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: center;
  letter-spacing: 2px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
  margin: 20px 0 0 20px;
  background: rgb(249, 249, 249);
`;
const Day = styled.input`
  font-size: 20px;
  width: 25%;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: center;
  letter-spacing: 2px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
  margin: 20px 0 0 20px;
  background: rgb(249, 249, 249);
`;

const Year = styled.input`
  font-size: 20px;
  width: 25%;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: center;
  letter-spacing: 2px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
  margin: 20px 50px 0 20px;
  background: rgb(249, 249, 249);
`;

const TimeArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 30px 0 0 40px;
    font-size: 18px;
    width: 37%;
    font-weight: 600;
  }

  select {
    font-size: 20px;
    width: 25%;
    height: 5vh;
    border: solid;
    border-width: 0px 0px 1px;
    border-color: #858585;
    text-align: center;
    letter-spacing: 2px;
    color: #323a47;
    padding-bottom: 5px;
    outline: none;
    margin: 25px 50px 0 20px;
    background: rgb(249, 249, 249);
  }
`;

const PeopleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 80%;
  border: solid;
  margin: 30px 0 0 40px;
  height: 5vh;
  border-width: 0px 0px 1px;
  border-color: #858585;
  text-align: center;
  letter-spacing: 2px;
  color: #323a47;

  h2 {
    margin: 30px 0 0 0;
    font-size: 20px;
    width: 60%;
    height: 5vh;
    border-width: 0px 0px 1px;
    border-color: #858585;
    text-align: center;
    letter-spacing: 2px;
    color: #323a47;
  }
  button {
    border: none;
    background: rgb(249, 249, 249);
    cursor: pointer;
    svg {
      cursor: pointer;

      &:hover {
        background: yellow;
      }
    }
  }
`;

const BookButton = styled.button`
  flex: none;
  margin: 30px 0 0 40px;
  color: rgb(249, 249, 249);
  background: black;
  border: 2px white solid;
  width: 80%;
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
