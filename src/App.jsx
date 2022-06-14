import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import useWeather from "./hooks/useWeather";
import back1 from "./assets/back.jpg";
import Nav from "./components/Nav";
import Spinner from "./components/Spinner";
import ErrorFetching from "./components/ErrorFetching";

function App() {
  const { weather, loading, error, setError } = useWeather();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorFetching setError={setError} />;
  }

  return (
    <GlobalContainer>
      {weather && (
        <>
          <Nav weather={weather} loading={loading} />
          <WeatherInfo weather={weather} />
        </>
      )}
    </GlobalContainer>
  );
}

export default App;

const GlobalContainer = styled.div`
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
  flex-direction: column;
  @media (max-width: 340px) {
    padding: 20px 0;
  }
`;
