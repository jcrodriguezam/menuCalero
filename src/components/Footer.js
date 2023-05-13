import React, { useState } from "react"
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa';
import AlergenInfo from './AlergenInfo';

const Wrapper = styled.div`
    display: flex;
    font-weight: 300;
    font-size: .8em;
    opacity: .9;
    color: #9a9a9a;
    font-style: italic;
    position: relative;
    flex-shrink: 0;
    justify-content: center;
    padding: 1em;
    font-size: .7em;
    background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(0,0,0,0) 100%);
`;
const Wrapper2 = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%
`;

const Info = styled.div`
    display: flex;
    font-weight: 300;
    font-size: .8em;
    opacity: .9;
    color: #f1e1cb;
    font-style: italic;
    text-align: center;
    padding: 2em;
    flex-flow:column;
`;

const AlergenLink = styled.span`
    color: #d7ae65;
    text-decoration: underline;
    margin-top: 1em;
`;


const Footer = ({ alergenInfo, extraText }) => {
    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) }
    return (
        <Wrapper2>
            <Info>
                {extraText.preInfo}<br />
                <AlergenLink onClick={toggle}>{extraText.alergenInfoTitle}</AlergenLink>
            </Info>
            <Info style={{display: 'block', margin: 'auto', padding: 0}}>@barbacoacalero98</Info>
            <Wrapper>Made with &nbsp;<FaHeart style={{color: '#ff0045'}}/>&nbsp; by ROAM</Wrapper>
            <AlergenInfo dismiss={toggle} show={show} alergenInfo={alergenInfo} extraText={extraText}/>

        </Wrapper2>
    )
}

export default Footer;