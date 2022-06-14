import React, { useState } from "react";
import { iconUrlFromCode } from "../utils/getWeather";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  selected: {
    scale: 1.06,
    backgroundColor: "#fad54fa6",
  },
  unselected: {
    scale: 1,
    backgroundColor: "hsla(0, 0%, 0%, 0)",
  },
};

const WeatherForDays = ({ weather, selectedDay, setSelectedDay }) => {
  const { daily } = weather;

  const scroolTop = () => {
    window.scrollTo({
      top: document.documentElement.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <ContainerNav>
        <h4>In The Week</h4>
      </ContainerNav>
      <ContainerDays>
        {daily.map((data, i) => (
          <motion.div
            key={data.temp.min + Math.random()}
            className="days-item"
            whileHover={{ backgroundColor: "#d4d4d442" }}
            variants={variants}
            animate={selectedDay === i ? "selected" : "unselected"}
            onClick={() => {
              scroolTop();
              setSelectedDay(selectedDay === i ? 0 : i);
            }}
          >
            <h4>{i == 0 ? "TODAY" : data.title.slice(0, 3)}</h4>
            <p>
              min: <span>+{data.temp.min}°</span>
            </p>
            <p>
              max: <span>+{data.temp.max}°</span>
            </p>
            <img src={iconUrlFromCode(data.icon)} alt={data.title} />
            <p className="description-days">{data.description}</p>
          </motion.div>
        ))}
      </ContainerDays>
    </Container>
  );
};

export default WeatherForDays;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const ContainerNav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #afafaf;
  padding: 15px 45px;
  h4 {
    color: #fad54f;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const ContainerDays = styled.div`
  width: 97%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 40px;
  place-items: center;
  .days-item {
    max-width: 145px;
    overflow-x: hidden;
    color: #bdbdbd;
    cursor: pointer;
    padding: 20px 35px;
    background-color: hsla(0, 0%, 0%, 0);
    margin-top: 20px;
    z-index: 2;
    img {
      width: 75px;
    }
    h4 {
      color: #fff;
      font-weight: 500;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    p {
      font-size: 12px;
      span {
        color: #fff;
      }
    }
    .description-days {
      text-transform: capitalize;
    }
  }
`;
