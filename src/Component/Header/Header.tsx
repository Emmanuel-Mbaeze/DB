import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { FaCube, FaCubes, FaFilePdf } from "react-icons/fa";
import { MdDashboard, MdGroup, MdInventory, MdSettings } from "react-icons/md";
import SlideComp from "./SlideComp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [change, setChange] = useState(false);
  const myRef = useRef<HTMLDivElement>(null!);
  const backRef = useRef<HTMLDivElement>(null!);
  const changeTrue = () => {
    setChange(true);
    myRef.current.style.left = "0px";
    backRef.current.style.left = "0px";
  };
  const changeFalse = () => {
    setChange(false);
    myRef.current.style.left = "-300px";
    backRef.current.style.left = "-2000px";
  };
  console.log(change);
  return (
    <div>
      <Container>
        <Wrapper>
          <Menu>
            {" "}
            {change ? (
              <FaBars fontSize="20px" cursor="pointer" onClick={changeFalse} />
            ) : (
              <FaBars fontSize="20px" cursor="pointer" onClick={changeTrue} />
            )}
          </Menu>
          <Icon>
            <h1>menu</h1>
          </Icon>
          <h2>Logo</h2>
          <h4>Admin</h4>
        </Wrapper>
      </Container>
      <Side>
        <Text>Menu</Text>
        <Wrap>
          <Hold to="/dashboard">
            <Icon1 />
            <Write>Dashboard</Write>
          </Hold>

          <Hold to="/">
            <Icon2 />
            {/* <MdHomeFilled/> */}
            <Write>Staffs</Write>
          </Hold>
          <Hold to="/expense">
            <Icon3 />
            <Write>Expenses</Write>
          </Hold>
          <Hold to="/">
            <Icon4 />
            <Write>Income</Write>
          </Hold>
          <Hold to="/">
            <Icon5 />
            <Write>Estimates</Write>
          </Hold>
          <Hold to="/">
            <Icon6 />
            <Write>Invoices</Write>
          </Hold>
          <Hold to="/">
            <Icon7 />
            <Write>Settings</Write>
          </Hold>
        </Wrap>
        {/* 
          <Hold>
            <MdLogout color="#aaa" fontSize="18px" cursor="pointer" />
            <Write>Logout</Write>
          </Hold> */}
      </Side>
      <Back ref={backRef}>
        <SideHold ref={myRef}>
          <SlideComp />
        </SideHold>
      </Back>
    </div>
  );
};

export default Header;
const Icon = styled(FaBars)`
  display: flex;
  font-size: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Back = styled.div`
  display: none;

  @media (max-width: 1000px) {
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    transition: 1ms;
    left: -2000px;
    display: block;
    z-index: 1111;
  }
`;
const SideHold = styled.div`
  display: none;

  @media (max-width: 1000px) {
    width: 260px;
    display: block;

    height: 88%;
    transition: all 350ms;
    /* display: flex; */
    background-color: white;
    border-top-right-radius: 30px;
    position: fixed;
    top: 88px;
    left: -300px;
  }
`;
const Write = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #aaa;
  margin-left: 7px;
  font-size: 13px;
  cursor: pointer;

  :active {
    color: #7638ff;
  }
`;
const Icon1 = styled(MdDashboard)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;

const Icon2 = styled(MdGroup)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon3 = styled(FaCube)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon4 = styled(FaCubes)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon5 = styled(FaFilePdf)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon6 = styled(MdInventory)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon7 = styled(MdSettings)`
  margin-left: 20px;
  color: #aaa;
  font-size: 18px;

  :active {
    color: #7638ff;
  }
`;
const Icon8 = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  z-index: 11111;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const Wrap = styled.div``
const Side = styled.div`
  width: 230px;
  height: 88%;
  overflow: hidden;
  /* display: flex; */
  background-color: white;
  border-top-right-radius: 30px;
  position: fixed;
  top: 88px;
  z-index: 1111;
  @media (max-width: 1000px) {
    display: none;
    /* left: -300px; */
  }

  //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  //box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
const Wrap = styled.div`
  /* width: 90%; */
  height: 45%;
  margin-top: 23px;
  /* padding-left: 15px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // background-color: red;
`;
const Text = styled.div`
  padding-left: 15px;
  font-weight: bold;
  color: #aaa;
  font-size: 13px;
  margin-top: 20px;
`;
const Hold = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  /* height: 100px; */
  padding: 10px 0px;
  cursor: pointer;
  text-decoration: none;

  :active {
    border-left: 5px solid #7638ff;
    background-color: #f8f5ff;
    color: #7638ff;
  }

  :focus {
    border-left: 5px solid #7638ff;
    background-color: #f8f5ff;
    color: #7638ff;
  }
`;
