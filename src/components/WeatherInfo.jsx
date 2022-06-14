import React, { useState } from "react";
import styled from "styled-components";
import { iconUrlFromCode } from "../utils/getWeather";
import InfoWeather from "./InfoWeather";
import WeatherForDays from "./WeatherForDays";

const WeatherInfo = ({ weather }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <ContainerWeather>
      <InfoWeather
        weather={weather}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
      <WeatherForDays
        weather={weather}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
      />
    </ContainerWeather>
  );
};

export default WeatherInfo;

export const ContainerWeather = styled.div`
  width: 90%;
  margin: 0 auto;
`;
