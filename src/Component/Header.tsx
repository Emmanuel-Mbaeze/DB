import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <FaBars fontSize="20px" cursor="pointer" />
          <h2>Logo</h2>
          <h4>Admin</h4>
        </Wrap>
      </Container>
    </div>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  z-index: 1;
`;
const Wrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const Wrap = styled.div``
