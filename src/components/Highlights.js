import React from "react";
import styled from "styled-components";

function Highlights() {
  return (
    <Container>
      <MainText>
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
          <g fill="none" fill-rule="evenodd">
            <path fill="#9E7F66" d="M15 3h56v1H15z" />
            <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
          </g>
        </svg>
        <h1>A few highlights from our menu</h1>
        <h3>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</h3>
      </MainText>
      <Featured>
        <ItemOne>
          <img src="images/homepage/salmon-desktop-tablet.jpg" alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <FeaturedTextOne>
            <h2>Seared Salmon Fillet</h2>
            <h3>Our locally sourced salmon served with a refreshing buckwheat summer salad.</h3>
          </FeaturedTextOne>
        </ItemOne>
        <hr></hr>
        <ItemOne>
          <img src="images/homepage/beef-desktop-tablet.jpg" alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <FeaturedTextOne>
            <h2>Rosemary Filet Mignon</h2>
            <h3>Our prime beef served to your taste with a delicious choice of seasonal sides.</h3>
          </FeaturedTextOne>
        </ItemOne>
        <hr></hr>
        <ItemOne>
          <img src="images/homepage/chocolate-desktop-tablet.jpg" alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <FeaturedTextOne>
            <h2>Summer Fruit Chocolate Mousse</h2>
            <h3>Creamy mousse combined with summer fruits and dark chocolate shavings.</h3>
          </FeaturedTextOne>
        </ItemOne>
      </Featured>
    </Container>
  );
}

export default Highlights;

const Container = styled.div`
  color: white;
  background-color: rgb(17, 17, 17);
  height: 85vh;
  display: flex;
`;

const MainText = styled.div`
  margin-left: 150px;
  margin-top: 250px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    width: 35%;
    margin-top: 50px;
    line-height: 1.4;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    width: 38%;
    line-height: 1.8;
  }
`;

const Featured = styled.div`
  margin-top: 300px;
  margin-left: -20%;

  hr {
    width: 600px;
    position: absolute;
  }
`;

const ItemOne = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  margin-top: 20px;

  img {
    margin-top: 20px;
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: contain;
  }

  svg {
    position: absolute;
    left: 12%;
    top: 25%;
    z-index: -1;
  }
`;

const FeaturedTextOne = styled.div`
  margin-left: 8%;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }

  h3 {
    font-size: 17px;
    font-weight: 100;
    width: 60%;
    line-height: 1.8;
  }
`;
