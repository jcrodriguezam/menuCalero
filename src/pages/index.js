import React from "react"
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppBody from '../components/Body'
import "../styles/styles.css"

const Wrapper = styled.div`
  max-width: 768px;
  overflow: hidden;
  margin: 0 auto;
  min-height: 100vh;
  background: rgb(17,17,17);
  background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(51,51,51,1) 100%);
`;

export default function Home() {
  return (
    <div className="body">
      <Wrapper>
        <Header />
        <AppBody />
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <Footer style={{position: 'relative'}}/>
        </div>
      </Wrapper>
    </div>
  )
}
