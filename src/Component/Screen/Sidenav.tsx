import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaCube,
  FaCubes,
  FaDollarSign,
  FaFilePdf,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";
import {
  MdDashboard,
  MdGroup,
  MdInventory,
  MdLogout,
  MdHomeFilled,
  MdSettings,
} from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";
const Sidenav = () => {
  return (
    <div>
      <Container>
        <Side>
          <Text>Menu</Text>
          {/* <Wrap>
            <Hold to="/">
              <MdHomeFilled color="#aaa" cursor="pointer" />
              <Write>Home</Write>
            </Hold>
            <Hold to="/dashboard">
              <MdDashboard color="#aaa" cursor="pointer" />
              <Write>Dashboard</Write>
            </Hold>
            <Hold to="/dashboard">
              <MdGroup color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Staffs</Write>
            </Hold>
            <Hold to="/dashboard">
              <FaCube color="#aaa" fontSize="15px" cursor="pointer" />
              <Write>Expenses</Write>
            </Hold>
            <Hold to="/dashboard">
              <FaCubes color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Income</Write>
            </Hold>
            <Hold to="/dashboard">
              <FaFilePdf color="#aaa" fontSize="16px" cursor="pointer" />
              <Write>Estimates</Write>
            </Hold>
            <Hold to="/dashboard">
              <MdInventory color="#aaa" fontSize="16px" cursor="pointer" />
              <Write>Invoices</Write>
            </Hold>
            <Hold to="/dashboard">
              <MdSettings color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Settings</Write>
            </Hold>
          </Wrap> */}
          {/* 
          <Hold>
            <MdLogout color="#aaa" fontSize="18px" cursor="pointer" />
            <Write>Logout</Write>
          </Hold> */}
        </Side>
      </Container>
    </div>
  );
};

export default Sidenav;
// const Container = styled.div``
const Hold = styled(Link)`
  display: flex;
  align-items: center;
  width: 47%;
  text-decoration: none;
`;
const Write = styled.div`
  font-weight: bold;
  color: #aaa;
  margin-left: 7px;
  font-size: 13px;
  cursor: pointer;
`;
const Text = styled.div`
  padding-left: 15px;
  font-weight: bold;
  color: #aaa;
  font-size: 13px;
  margin-top: 20px;
`;
const Wrap = styled.div`
  width: 90%;
  height: 45%;
  margin-top: 23px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
  /* background-color: #935d15; */
`;
const Side = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #352b1e; */

  @media (max-width: 768px) {
    display: none;
  }
`;
