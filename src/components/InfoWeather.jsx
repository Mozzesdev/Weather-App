import React from "react";
import styled from "styled-components";
import { formatToLocalTime, iconUrlFromCode } from "../utils/getWeather";

const InfoWeather = ({ weather, selectedDay, setSelectedDay }) => {
  const icon = iconUrlFromCode(weather.icon);

  const hora = weather.hourly.filter(
    (e) => Number(e.title.slice(0, 2)) % 3 === 0
  );

  const { daily } = weather;

  const date = new Date().getDay();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthString = `${new Date().getDate() + selectedDay}th ${
    month[new Date().getMonth()]
  }`;
  const probability = weather.daily[selectedDay].pop;

  const { sunrise, sunset } = weather;

  return (
    <Container>
      <FirstContent>
        <div className="direction_column item-content__1">
          <img src={icon} alt="" />
          <p>
            Sunrise:{" "}
            {selectedDay === 0
              ? formatToLocalTime(sunrise, weather.timezone, "hh:mm a")
              : formatToLocalTime(
                  daily[selectedDay].sunrise,
                  weather.timezone,
                  "hh:mm a"
                )}
          </p>
          <p>
            Sunset:{" "}
            {selectedDay === 0
              ? formatToLocalTime(sunset, weather.timezone, "hh:mm a")
              : formatToLocalTime(
                  daily[selectedDay].sunset,
                  weather.timezone,
                  "hh:mm a"
                )}
          </p>
        </div>
        <div className="direction_column item-content__2">
          <h3>
            {daily[selectedDay].title} {monthString}{" "}
            {selectedDay === 0
              ? formatToLocalTime(weather.dt, weather.timezone, "h:mm")
              : formatToLocalTime(
                  daily[selectedDay].dt,
                  weather.timezone,
                  "h:mm"
                )}
          </h3>
          <p className="temperature__prin">
            +
            {selectedDay === 0
              ? weather.temp.toString().slice(0, 2)
              : daily[selectedDay].temp.max.toString().slice(0, 2)}
            °C
          </p>
          <p className="feels-like">
            Feels like{" "}
            {selectedDay === 0
              ? weather.feels_like.toString().slice(0, 2)
              : daily[selectedDay].feels_like.eve.toString().slice(0, 2)}{" "}
            °
          </p>
          <p className="description-current">
            {selectedDay === 0
              ? weather.description
              : daily[selectedDay].description}
          </p>
        </div>
        <div className="direction_column item-content__3">
          <h4 className="more-details__current">MORE DETAILS:</h4>
          <div>
            <p className="more-detail__data">
              Wind speed:{" "}
              <span>
                {selectedDay === 0
                  ? weather.speed
                  : daily[selectedDay].wind_speed}{" "}
                m/s.
              </span>
            </p>
            <p className="more-detail__data">
              Air humidity:{" "}
              <span>
                {selectedDay === 0
                  ? weather.humidity
                  : daily[selectedDay].humidity}
                %
              </span>
            </p>
            <p className="more-detail__data">
              Pressure:{" "}
              <span>
                {selectedDay === 0
                  ? weather.pressure
                  : daily[selectedDay].pressure}
                mm
              </span>
            </p>
            <p className="more-detail__data">
              Precipitation probability:{" "}
              <span>{(probability * 100).toString().slice(0, 2)}%</span>
            </p>
          </div>
        </div>
      </FirstContent>
      <SecondContent>
        {hora.slice(1, 8).map((data) => (
          <div key={data.temp} className="hours-info">
            <img src={iconUrlFromCode(data.icon)} alt={data.icon} />
            <p className="hour_temp">+{Math.round(data.temp)}°</p>
            <p className="hour_time">{data.title}</p>
          </div>
        ))}
      </SecondContent>
    </Container>
  );
};

export default InfoWeather;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 440px) {
    justify-content: flex-start;
  }
`;

const FirstContent = styled.div`
  display: flex;
  color: #fff;
  .direction_column {
    display: flex;
    flex-direction: column;
  }
  .item-content__1 {
    justify-content: space-between;
    img {
      width: 90px;
      transform: scale(1.2);
    }
    p {
      font-size: 13px;
      color: #d0d0d0;
      font-weight: 300;
    }
  }
  .item-content__2 {
    margin-left: 30px;
    align-items: left;
    justify-content: space-between;
    .temperature__prin {
      font-size: 70px;
      font-weight: 600;
      color: #fad54f;
    }
    .feels-like {
      font-size: 16px;
      letter-spacing: 0px;
    }
    .description-current {
      font-size: 12px;
      font-weight: 300;
      color: #d0d0d0;
      text-transform: capitalize;
    }
  }

  .item-content__3 {
    margin-left: 60px;
    justify-content: space-between;
    .more-details__current {
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 16px;
    }
    .more-detail__data {
      font-size: 12px;
      font-weight: 300;
      color: #d0d0d0;
      margin: 13px 0;
      span {
        color: #f3f3f3;
        font-weight: 500;
        margin-left: 5px;
      }
      :last-child {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 600px) {
    .item-content__1 {
      img {
        width: 70px;
        transform: scale(1.2);
      }
    }
    .item-content__2 {
      margin-left: 20px;
      h3 {
        font-size: 14px;
      }
      .temperature__prin {
        font-size: 50px;
      }
      .feels-like {
        font-size: 14px;
      }
    }
    .item-content__3 {
      margin-left: 20px;
      justify-content: space-between;
      .more-details__current {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 440px) {
    flex-direction: column;
    .item-content__1 {
      margin: 0 0 20px 0;
      img {
        width: 70px;
        transform: scale(1.2);
      }
    }
    .item-content__2 {
      margin-left: 0;
      p {
        margin: 4px 0;
      }
    }
    .item-content__3 {
      margin-top: 20px;
      margin-left: 0;
      justify-content: space-between;
      .more-details__current {
        margin-bottom: 5px;
      }
    }
  }
`;

const SecondContent = styled.div`
  background-color: #00000019;
  backdrop-filter: blur(2px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 20px 25px 20px;
  .hours-info {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 75px;
    }
    p {
      margin-bottom: 9px;
      :last-child {
        margin-bottom: 0;
      }
    }
    .hour_time {
      font-size: 12px;
      color: #d0d0d0;
    }
    .hour_temp {
      font-weight: 600;
    }
  }
`;
