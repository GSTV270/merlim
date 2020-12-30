import NextImage from 'next/image'
import styled from 'styled-components'

import pageBackground from '../../../assets/page-background.jpg'

export const CardContainer = styled.div`
  height: 500px;
  width: 300px;
  background: url(${pageBackground});
  background-size: cover;
  border: 10px solid #d02b36;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderTitle = styled.section`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 2px 0;
  border-bottom: 2px solid #d02b36;

  strong {
    margin: 5px 0;
  }
`

export const HeaderDescription = styled.section`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background: #d02b36;
  color: #fff;
  padding-bottom: 4px;
`

export const Body = styled.div`
  position: relative;
  height: 100%;
  padding: 5px 10px;
`

export const Image = styled(NextImage)`
  position: absolute;
  left: 0;
  bottom: 0;
`

export const Footer = styled.footer`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: #d02b36;
`
