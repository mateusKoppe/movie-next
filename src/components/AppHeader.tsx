import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const Content = styled.div`
  max-width: 120rem;
  width: 100%;
  padding: 1.5rem;
`;

const AppHeader = () => {
  return (
    <Wrapper>
      <Content>
        <a href="/">MovieNext</a>
      </Content>
    </Wrapper>
  );
};

export default AppHeader;
