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
import { Progress } from "rsuite";
const Display = () => {
  return (
    <div>
      <Container>
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
                    {/* <Yellow></Yellow> */}
                    <Progress.Line percent={30} status="active" />
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
                    {/* <Skyblue></Skyblue> */}
                    {/* <Progress.Line percent={70} status="active" /> */}
                    <Progress.Line percent={30} strokeColor="#ffc107" />gtg
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
                    {/* <Red></Red> */}
                    <Progress.Line percent={50} status="active" />
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
                    {/* <Purple></Purple> */}
                    <Progress.Line percent={100} status="active" />
                  </Mid>
                  <Down>
                    <h3>2.5%</h3> since last week
                  </Down>
                </Boxhold>
              </Box>
            </Top>
            <Middle>
              <Card>
                <One>
                  <Text>Sales Analystic</Text>
                  <Texthold>
                    <Test>Monthly</Test>
                  </Texthold>
                </One>
                <Two>
                  <Twohold>
                    <Currencyhold>
                      <Test>Total Sales</Test>
                      <Currency>$1000</Currency>
                    </Currencyhold>
                    <Currencyhold>
                      <Test>Expenses</Test>
                      <Currency2>$500</Currency2>
                    </Currencyhold>
                    <Currencyhold>
                      <Test>Receipt</Test>
                      <Currency1>$100</Currency1>
                    </Currencyhold>
                    <Currencyhold>
                      <Test>Earnings</Test>
                      <Currency3>$300</Currency3>
                    </Currencyhold>
                  </Twohold>
                </Two>
                <Three></Three>
              </Card>
              <Carded>
                <One>
                  <Text>Invoice Analystic</Text>
                  <Texthold>
                    <Test>Monthly</Test>
                  </Texthold>
                </One>
                <Four></Four>
              </Carded>
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

export default Display;
// const Container = styled.div``
// const Container = styled.div``
const Carded = styled.div`
  width: 400px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1024px) {
    width: 93%;
  }
`;

const Currency = styled.div`
  color: purple;
  font-weight: bold;
  font-size: 16px;
`;
const Currency1 = styled.div`
  color: green;
  font-weight: bold;
  font-size: 16px;
`;
const Currency2 = styled.div`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;
const Currency3 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;
const Currencyhold = styled.div`
  display: flex;
  flex-direction: column;
`;
const Texthold = styled.div`
  border: 1.5px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 22px;
  /* margin-top: 20px; */
`;
const Text = styled.div`
  font-weight: bold;
  color: #aaa;
  font-size: 18px;
`;
const Test = styled.div`
  font-weight: bold;
  color: #aaa;
  font-size: 12px;
`;
const Four = styled.div`
  width: 100%;
  height: 290px;
  /* background-color: green; */
`;
const Three = styled.div`
  width: 100%;
  height: 230px;
  /* background-color: green; */
`;
const Two = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
`;
const Twohold = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: #294329; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;
  @media (max-width: 425px) {
    width: 97%;
  }
`;
const One = styled.div`
  width: 97%;
  padding: 5px;
  height: 40px;
  border-bottom: 1.7px solid #dadbdc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 526px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1024px) {
    width: 93%;
    /* background-color: gray; */
  }
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
  @media (max-width: 1024px) {
    width: 45%;
    margin: 7px;
    /* background-color: rgb(227, 23, 23); */
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

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 290px);
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 96vw;
    /* background-color: #60a5ea; */
  }
`;

//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

const Main = styled.div`
  // background-color: blue;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;
