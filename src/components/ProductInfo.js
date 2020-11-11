import React from "react"
import styled from 'styled-components'
import alergenInfoData from '../data/alergenInfo.json';
import { FaArrowLeft } from 'react-icons/fa';


const Overlay = styled.div`
    z-index: 20;
    height:100vh;
    width: 100vw;
    display: flex;
    top:0;
    position: fixed;
    background-color: rgba(0,0,0,.9);
    flex-flow: column;
    overflow: scroll;
`;

const Goback = styled.div`
    display: flex;
    padding: 1em;
    justify-content: flex-start;
`;
const Title = styled.div`
    display: flex;
    padding: 1em;
    padding-top: 0;
    justify-content: center;
    color: #e0b668;
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Trispace', sans-serif;
    position: relative;
    font-size: 1.2em;
    text-align: center;
`;
const AlergensWrapper = styled.div`
    display: flex;
    padding: 1em;
    padding-top: 0;
    justify-content: center;
    flex-flow: column;
`;
const Alergen = styled.div`
    display: flex;
    padding-bottom: 1em;
    justify-content: center;
    flex-flow: column;
`;
const AlergenIcon = styled.img`
    object-fit: contain;
    opacity: .8;
    display: flex;
    margin-bottom: 1em;
    max-width: 80px;
    margin: auto;
`;
const AlergenInfo = styled.p`
    display: block;
    max-width: 80%;
    margin: auto;
    text-align: center;
    color: #fafafa;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`;



const ProductInfo = ({show, dismiss, data}) => {
    return (
        <>
        {
            show ? (
                <Overlay onClick={dismiss}>
                    <Goback onClick={dismiss}><FaArrowLeft style={{fontSize: '2em', color: '#fafafa'}}/></Goback>
                    <Title>{data.title}</Title>
                    <AlergensWrapper>
                        {
                            data.alergen.map((item, i) => (
                                <Alergen>
                                    <AlergenIcon src={`${item}.png`} alt={item}/>
                                    <AlergenInfo>{alergenInfoData[item]}</AlergenInfo>
                                </Alergen>
                            ))
                        }
                    </AlergensWrapper>
                </Overlay>            
                ) : (<></>)
        }
        </>

    )
}
export default ProductInfo;