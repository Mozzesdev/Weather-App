import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Search from "./Search";
import { useMain } from "../context/mainContext";

const Nav = ({ weather, loading }) => {
  const [openModal, setOpenModal] = useState(false);
  const { setCity } = useMain();

  return (
    <ContainerNav>
      <NavBar>
        <NavItem>
          <h1>WEATHER</h1>
          
        </NavItem>
        <NavItem>
        <motion.div
            className="nav-item__zone"
            whileHover={{ rotate: ["0deg", "1deg", "0deg", "1deg", "0deg"] }}
            onClick={() => setOpenModal(!openModal)}
          >
            <Search
              open={openModal}
              setOpen={setOpenModal}
              setCity={setCity}
              loading={loading}
            />{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 2 25 20"
              fill="#fff"
            >
              <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
              <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
            </svg>
            <p>
              Weather in the "{weather.name}"<span>/</span>
            </p>
            {weather.country}
            <motion.div
              animate={openModal ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 2 25 20"
                fill="#fff"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </motion.div>
          </motion.div>
        </NavItem>
      </NavBar>
    </ContainerNav>
  );
};

export default Nav;

const ContainerNav = styled.div`
  width: 100%;
  background-color: transparent;
  margin-bottom: 120px;
`;

const NavBar = styled.nav`
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  .nav-item__zone {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 40px;
    svg {
      margin: 0 5px;
    }
    span {
      margin: 0 5px;
    }
  }
  h2 {
    margin-left: 80px;
  }
`;
