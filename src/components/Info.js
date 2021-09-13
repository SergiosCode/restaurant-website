import React from 'react';
import styled from 'styled-components';

function Info() {
    return (
        <Container>
           <h1>dine</h1>
           <Location>
               <h2>Marthwaite, Sedbergh
  Cumbria</h2>
               <h2>+00 44 123 4567</h2>
           </Location>
           <Hours>
               <h2>Open Times</h2>
               <h2>Mon - Fri: 09:00 AM - 10:00 PM</h2>
               <h2>Sat - Sun: 09:00 AM - 11:30 PM</h2>
           </Hours>
        </Container>
    )
}

export default Info


const Container = styled.div`
height: 30vh;
background-color: rgb(17, 17, 17);
display: flex;
align-items: center;

h1{
    color: rgb(249,249,249);
    font-size: 50px;
    font-weight: light;
    margin-left: 20vh;
}
`

const Location = styled.div`
margin-left: 25vh;
width: 30vh;

h2{
    color: white;
font-size: 18px;
font-weight: 100;
line-height: 1.5;
}
`

const Hours = styled.div`
margin-left: 25vh;
h2{
    color: white;
font-size: 18px;
font-weight: 100;
}
`