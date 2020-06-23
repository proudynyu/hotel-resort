import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
  width: 85vw;

  padding: 20px 40px;
  margin: 10px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomFilter = styled.div`
  margin: 10px auto;
  display: flex;
  width: 80vw;
  justify-content: center;
  align-items: center;
`;

export const Types = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
