import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <TopBody>
        <img src="/images/homepage/enjoyable-place-desktop.jpg" alt="" />
        <body>
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <h2>Enjoyable place for all the family</h2>
          <h3>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</h3>
        </body>
      </TopBody>

      <BottomBody>
        <body>
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <h2>The most locally sourced food</h2>
          <h3>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</h3>
        </body>
        <img src="/images/homepage/locally-sourced-desktop.jpg" alt="" />
      </BottomBody>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  position: relative;
  height: 150vh;
`;

const TopBody = styled.div`
  display: flex;

  img {
    position: absolute;
    left: 150px;
    top: -70px;
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 60%) 0px 16px 10px -10px;
  }

  body {
    position: absolute;
    left: 55%;
    top: 20%;

    h2 {
      color: #242b37;
      font-size: 40px;
      width: 50%;
      margin-top: 50px;
      line-height: 1.4;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      width: 55%;
      line-height: 1.8;
    }
  }
`;

const BottomBody = styled.div`
  display: flex;

  img {
    position: absolute;
    right: 150px;
    bottom: -70px;
  }

  body {
    position: absolute;
    left: 150px;
    bottom: 10%;

    h2 {
      color: #242b37;
      font-size: 40px;
      width: 40%;
      margin-top: 50px;
      line-height: 1.4;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      width: 35%;
      line-height: 1.8;
    }
  }
`;
