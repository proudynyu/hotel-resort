import styled from 'styled-components';

export const Container = styled.div`
  min-height: 60vh;
  background: url(${props => props.img ? props.img : ''}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;