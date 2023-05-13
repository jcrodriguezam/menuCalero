import React from "react"
import styled from 'styled-components'
import { FaArrowLeft, FaCircle } from 'react-icons/fa';


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
    opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: all .8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Goback = styled.div`
    display: flex;
    padding: 1em;
    justify-content: flex-start;
    position: fixed;
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
const EuropeButton = styled.div`
    display: flex;
    padding-top: 0;
    justify-content: center;
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Trispace', sans-serif;
    position: relative;
    font-size: 1.2em;
    text-align: center;
    padding: .5em;
    border: 3px solid #e0b66830;
    margin: 2em;
    color: #c1c1c1;
    background-color: #e0b66829;
    border-radius: 15px;
`;
const SubTitle = styled.div`
    display: flex;
    padding: 1em;
    padding-top: 0;
    color: #fcfcfc;
    font-weight: 300;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    position: relative;
    font-size: 1em;
    text-align: left;
`;

const AlergenI = styled.img`
    object-fit: contain;
    opacity: .8;
    display: flex;
    margin-bottom: 1em;
    max-width: 80px;
    margin: auto;
`;
const AlergenInfo = styled.p`
    display: block;
    text-align: left;
    color: #fafafa;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    padding: 0 1em;
`;

const names = {
    "gluten": "Cereales con gluten",
    "lacteo": "Lácteos",
    "huevo": "Huevos",
    "pescado": "Pescado",
    "crustaceos": "Crustáceos",
    "molusco": "Moluscos",
    "soja": "Soja",
    "cacahuetes": "Cacahuetes",
    "frutosCascara": "Frutos secos",
    "sesamo": "Sésamo",
    "mostaza": "Mostaza",
    "apio": "Apio",
    "altramuz": "Altramuz",
    "alcohol": "Sulfitos"
}

const AlergenIcon = ({item}) => {
    return (
       <div style={{display: 'inline-flex', flexFlow: 'column', width: '50%'}}>
           <AlergenI src={`${item}.png`} alt={item}/>
            <span style={{color: '#fafafaaa', margin: 'auto', display: 'block'}} dangerouslySetInnerHTML={{ __html: names[item] }} />
       </div> 
    )
}

const ProductInfo = ({ show, dismiss, alergenInfo, extraText={}}) => {
    const alerges = alergenInfo ? Object.keys(alergenInfo) : [];

    return (
        <>
        { alerges && alerges.length? 
            (
                <Overlay onClick={dismiss} show={show}>
                <Goback onClick={dismiss}><FaArrowLeft style={{fontSize: '2em', color: '#fafafa'}}/></Goback>
                <Title style={{marginTop: '3em'}}>{extraText.alergenInfo}</Title>
                <EuropeButton>{extraText.euroLaw}</EuropeButton>
                <Title style={{fontSize: '.8em'}}>{extraText.iconsUsed}</Title>
                <div style={{padding: '1em', paddingTop: '0'}}>
                    <div style={{border: '4px double silver', padding: '.6em'}}>
                    {
                        alerges.map((item, h) => (
                            <AlergenIcon item={item}/>
                        ))
                    }
                    </div>

                </div>
                <Title style={{marginTop: '2em'}}>{extraText.infoTitle}</Title>
                <SubTitle>{extraText.info}</SubTitle>
                
                <div style={{border: '4px double silver', padding: '.3em', margin: '1em'}}>
                    {
                    alerges.map((item, h) => (
                        <AlergenInfo>
                            <FaCircle style={{fontSize: '.6em'}} />
                            &nbsp;&nbsp;
                            {alergenInfo[item]}
                        </AlergenInfo>
                        ))
                    }
                    </div>
                
                <Title style={{marginBottom: '3em'}}>{extraText.endingLine}</Title>
            </Overlay>  
            ) : ''          
        }
        </>

    )
}
export default ProductInfo;