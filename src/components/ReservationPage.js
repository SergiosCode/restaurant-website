import React from "react";
import styled from "styled-components";

function ReservationPage() {
  return (
    <Container>
      <Top>
        <ReservationText>
          <h1>dine</h1>
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
    background: url("./images/booking/hero-bg-desktop.jpg") center center / cover no-repeat;
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
  display: flex;
  justify-content: center;
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
  letter-spacing: 0px;
  color: #323a47;
  padding-bottom: 5px;
  outline: none;
`;
