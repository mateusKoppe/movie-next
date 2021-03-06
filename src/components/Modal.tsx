import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TRANSITION = 0.2; // In seconds

interface ModalProps {
  visible: boolean;
  onClose: Function;
  title: string;
  width: number;
}

interface ModalStyleProps {
  visible: boolean;
  isClosing?: boolean;
  width?: number;
}

const Wrapper = styled.div<ModalStyleProps>`
  position: fixed;
  z-index: ${({ visible, isClosing }) => (visible && !isClosing ? 300 : -100)};

  transition: all ease ${TRANSITION}s;
`;

const Backdrop = styled.div<ModalStyleProps>`
  background-color: rgba(0, 0, 0, ${({ visible }) => (visible ? 0.4 : 0)});
  transition: all ease ${TRANSITION}s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div<ModalStyleProps>`
  position: fixed;
  width: ${({ width }) => width}px;
  max-height: 100vh;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ visible }) => (visible ? 1 : 0.5)});
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  max-width: calc(100vw - 1.5rem);
  background-color: white;
  padding: 1.4rem;
  border-radius: 1.3rem;
  transition: transform ${TRANSITION}s, opacity ${TRANSITION}s;
  transition-timing-function: ease;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;
  font-size: 2rem;
  padding: 0.7rem;
  background-color: transparent;
  line-height: 1;
  border: 0;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0.25em;
`;

const Body = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
`;

const Modal: FunctionComponent<ModalProps> = ({
  visible,
  onClose,
  title,
  width,
  children,
  ...props
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (visible) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "initial";
      setIsClosing(true);
      setTimeout(() => setIsClosing(false), TRANSITION * 100);
    }
  }, [visible]);

  return (
    <Wrapper isClosing={isClosing} visible={visible}>
      <Backdrop visible={visible} onClick={() => onClose()} />
      <Content {...props} width={width} visible={visible}>
        <header>
          <CloseButton onClick={() => onClose()}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <Title>{title}</Title>
        </header>
        <Body>{children}</Body>
      </Content>
    </Wrapper>
  );
};

export default Modal;
