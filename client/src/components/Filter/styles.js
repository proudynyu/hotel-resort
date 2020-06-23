import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  width: 80vw;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-right: 10px;
  min-width: 200px;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SizeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 22px;
`;

export const Select = styled.select`
  width: 100%;
  height: 2rem;
  padding: 5px;
  outline: none;
  border-radius: 4px;
  margin-top: 5px;
  font-size: 18px;
`;