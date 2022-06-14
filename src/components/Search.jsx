import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Search = ({ setCity, open, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <>
        <Form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          animate={open ? { height: ["0px", "90px"] } : { height: ["90px", "0px"]}}
          transition={{duration: 0.5}}
        >
          <input
            type="text"
            placeholder="Write a location or city"
            name="city"
            id="city"
            autoComplete="off"
          />
        </Form>
    </>
  );
};

export default Search;

const Form = styled(motion.form)`
  width: 99%;
  margin: 28px 0;
  max-height: 90px;
  position: absolute;
  overflow: hidden;
  top: 0;
  input {
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #00c2f8;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    padding: 5px 10px 6px;
    :focus {
      outline: none;
    }
    ::-webkit-input-placeholder {
      font-size: 12px;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      text-align: center;
    }
  }
`;
