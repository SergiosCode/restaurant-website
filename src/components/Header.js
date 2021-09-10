import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <h1>EXQUISITE</h1>
            <PageText>
            <h1>Exquisite dining since 1989 </h1>

            </PageText>
        </Container>
    )
}

export default Header


const Container = styled.div`
color: white;
 height: 100vh;
 position: relative;
  overflow-x: hidden;
  
  h1{
      padding-left: 100px;
    padding-top: 10px;
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
 
`

const PageText = styled.div`
 width: 20%;

 h1{
     font-size: 30px;
 }
`