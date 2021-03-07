import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.header<{ floating: boolean }>`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 90;
  transition: .3s background-color ease, .3s box-shadow ease;

  ${({ floating}) => floating && css`
    background-color: #bd4b3c;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  `}
`;

const Content = styled.div`
  max-width: 120rem;
  width: 100%;
  padding: 1.5rem;
`;

const FakeLogo = styled.span`
  font-size: 2.75rem;
  font-weight: 700;
  font-style: italic;
  color: white;
  font-family: Ubuntu;
`;

const AppHeader = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isFloatingNow = window.pageYOffset > 1;
      setIsFloating(isFloatingNow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper floating={isFloating}>
      <Content>
        <a href="/" style={{textDecoration: "none"}}>
          <FakeLogo>MovieNext</FakeLogo>
        </a>
      </Content>
    </Wrapper>
  );
};

export default AppHeader;
