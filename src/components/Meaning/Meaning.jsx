import React from "react";
import styled from "styled-components";

const Meaning = () => {
  return (
    <Container>
      <header>
        <h3 className="speech">noun</h3>
        <div className="line"></div>
      </header>
      <article></article>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;

  header {
  }
`;

export default NavBar;
