import styled from 'styled-components';

import customCardLayout from '../../../../../assets/template.jpg'

export const Container = styled.div`
  background: url(${customCardLayout});
  background-size: cover;
  height: 520px;
  width: 373px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 340px;
    max-height: 194px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    margin: 2px 0 0;
  }
`;

export const Description = styled.div`
  height: 240px;
  padding: 25px 15px;
`;
