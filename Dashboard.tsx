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
  MdSettings,
} from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";
const Dashboard = () => {
  return (
    <div>
      <Container>
        <Side>
          <Text>Menu</Text>
          <Wrap>
            <Hold>
              <MdDashboard color="#aaa" cursor="pointer" />
              <Write>Dashboard</Write>
            </Hold>
            <Hold>
              <MdGroup color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Staffs</Write>
            </Hold>
            <Hold>
              <FaCube color="#aaa" fontSize="15px" cursor="pointer" />
              <Write>Expenses</Write>
            </Hold>
            <Hold>
              <FaCubes color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Income</Write>
            </Hold>
            <Hold>
              <FaFilePdf color="#aaa" fontSize="16px" cursor="pointer" />
              <Write>Estimates</Write>
            </Hold>
            <Hold>
              <MdInventory color="#aaa" fontSize="16px" cursor="pointer" />
              <Write>Invoices</Write>
            </Hold>
            <Hold>
              <MdSettings color="#aaa" fontSize="18px" cursor="pointer" />
              <Write>Settings</Write>
            </Hold>
          </Wrap>
          {/* 
          <Hold>
            <MdLogout color="#aaa" fontSize="18px" cursor="pointer" />
            <Write>Logout</Write>
          </Hold> */}
        </Side>
        <Main>
          <Wrapper>
            <Top>
              <Box>
                <Boxhold>
                  <Up>
                    <FaDollarSign color="orange" fontSize="33px" />
                    <Texxt>
                      <H1>Amount Due</H1>
                      <Number>1,654</Number>
                    </Texxt>
                  </Up>
                  <Mid>
                    <Yellow></Yellow>
                  </Mid>
                  <Down>
                    <span>1.5%</span> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Ups>
                    <MdGroup color="skyblue" fontSize="35px" />
                    <Texxt>
                      <H1>Customers</H1>
                      <Number>94</Number>
                    </Texxt>
                  </Ups>
                  <Mid>
                    <Skyblue></Skyblue>
                  </Mid>
                  <Down>
                    <h1>3.7%</h1> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Upd>
                    <MdInventory color="red" fontSize="31px" cursor="pointer" />
                    <Texxt>
                      <H1>Invoices</H1>
                      <Number>94</Number>
                    </Texxt>
                  </Upd>
                  <Mid>
                    <Red></Red>
                  </Mid>
                  <Down>
                    <h2>4.5%</h2> since last week
                  </Down>
                </Boxhold>
              </Box>
              <Box>
                <Boxhold>
                  <Upg>
                    <FaFilePdf
                      color="purple"
                      fontSize="31px"
                      cursor="pointer"
                    />
                    <Texxt>
                      <H1>Estimates</H1>
                      <Number>108</Number>
                    </Texxt>
                  </Upg>
                  <Mid>
                    <Purple></Purple>
                  </Mid>
                  <Down>
                    <h3>2.5%</h3> since last week
                  </Down>
                </Boxhold>
              </Box>
            </Top>
            <Middle>
              <Card></Card>
              <Carded></Carded>
            </Middle>
            <Middle>
              <Card></Card>
              <Carded></Carded>
            </Middle>
          </Wrapper>
        </Main>
      </Container>
    </div>
  );
};

export default Dashboard;
// const Container = styled.div``
const Holder = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  min-height: 150px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 41px;
`;
const Box = styled.div`
  width: 230px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 5px;
  @media (max-width: 1324px) {
    width: 45%;
    margin: 7px;
  }
  @media (max-width: 425px) {
    width: 95%;
    margin: 7px;
  }
`;
const Boxhold = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Up = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Ups = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Upd = styled.div`
  width: 68%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Upg = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Texxt = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 16px;
`;
const Number = styled.div`
  font-size: 16px;
`;
const Mid = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;
const Yellow = styled.div`
  background-color: orange;
  width: 60%;
  height: 100%;
`;
const Skyblue = styled.div`
  background-color: skyblue;
  width: 80%;
  height: 100%;
`;
const Red = styled.div`
  background-color: red;
  width: 50%;
  height: 100%;
`;
const Purple = styled.div`
  width: 30%;
  background-color: purple;
  height: 100%;
`;
const Down = styled.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 70%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;
const Middle = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  /* align-items: center; */
  /* background-color: green; */
`;
const Card = styled.div`
  width: 526px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1324px) {
    width: 93%;
    /* background-color: gray; */
  }
`;
const Carded = styled.div`
  width: 400px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1324px) {
    width: 93%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  width: 47%;
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
  // background-color: red;
`;

const FolIcon = styled(FaUserFriends)`
  color: orange;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8f9fa;

  /* background-color: #352b1e; */
`;
const Side = styled.div`
  width: 260px;
  height: 88%;
  /* display: flex; */
  margin-top: 90px;

  background-color: white;
  // background-color: blue;
  border-top-right-radius: 30px;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Main = styled.div`
  // background-color: blue;
  margin-top: 50px;
  position: absolute;
  right: 0px;
  // left: 0;
  width: calc(100% - 260px);
  /* height: 92%; */
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;
