import styled from 'styled-components';

const Pinpoint = styled.div`
  display: flex;
  width: 12.1vw;
  flex-direction: column;
  width: 12.1vw;
  position: absolute;
  cursor: pointer;
  color: #000000;
  text-align: center;
  transition: 0.2s ease-in-out;  
  
  left: ${({ left }) => left};
  top: ${({ top }) => top};

`;

export default Pinpoint