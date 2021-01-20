import styled from 'styled-components';

export const DataForm = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 100%;
    max-width: 325px;

    display: flex;
    flex-direction: column;

    input {
      padding: 5px;
      border: 1px solid #000;
      border-radius: 4px;
      font-size: 15px;
    }

    textarea {
      padding: 5px;
      border: 1px solid #000;
      border-radius: 4px;
      font-size: 15px;
      resize: none;
    }
  }
`;

export const WizardsCardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    height: 1025px;
  }
`;
