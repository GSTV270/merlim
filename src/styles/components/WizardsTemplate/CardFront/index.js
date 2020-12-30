import styled from 'styled-components'

import pageBackground from '../../../../../assets/page-background.jpg'

export const CardContainer = styled.div`
  height: 500px;
  width: 300px;
  background: #d02b36;
  border: 10px solid #d02b36;
  border-top: 5px solid #d02b36;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  text-align: center;
  color: #fff;
  padding-bottom: 5px;
  letter-spacing: 3px;
  font-size: 18px;
`

export const Body = styled.div`
  height: 100%;
  padding: 5px 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url(${pageBackground});
`

export const Picture = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 270px;
    max-height: 420px;
  }
`

export const Title = styled.div`
  padding-top: 4px;
  font-size: 18px;
  font-weight: 600;
`
