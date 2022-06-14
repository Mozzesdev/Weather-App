import React from 'react'
import styled from 'styled-components'
import back1 from "../assets/back.jpg";

const Spinner = () => {
  return (
    <Container>
     <Spin />
    </Container>
  )
}

export default Spinner

const Container = styled.div`
background-image: url(${back1});
  background-repeat: no-repeat;
  background-position: 90% 20%;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  line-height: 1;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spin = styled.div`
  border: 4px solid #06e1ed;
  border-left-color: transparent;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`