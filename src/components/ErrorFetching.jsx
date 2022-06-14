import React from "react";
import styled from "styled-components";
import back1 from "../assets/back.jpg";

const ErrorFetching = ({ setError }) => {
  return (
    <Container>
      <h1>Error</h1>
      <button onClick={() => setError(false)}>Restart</button>
    </Container>
  );
};

export default ErrorFetching;

const Container = styled.div`
  background-image: url(${back1});
  background-repeat: no-repeat;
  background-position: 90% 20%;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
