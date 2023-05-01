import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidenav from "./Sidenav";
import Display from "./Display";
import Home from "./Home";

const Dashboard = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Sidescreen>
            <Sidenav />
          </Sidescreen>
          <Displayscreen>
            {/* <Display /> */}
            <Routes>
              {" "}
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="*" element={<Display />} />
            </Routes>
          </Displayscreen>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Dashboard;
// const Container = styled.div``
const Displayscreen = styled.div`
  margin-top: 50px;
  position: absolute;
  right: 0px;
  width: calc(100% - 260px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    /* background-color: #39424a; */
  }
`;
const Sidescreen = styled.div`
  width: 260px;
  height: 86%;
  margin-top: 90px;
  background-color: white;
  border-top-right-radius: 30px;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  position: relative;

  /* background-color: #352b1e; */
`;
