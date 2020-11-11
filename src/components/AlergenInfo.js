import React from "react"
import styled from 'styled-components'
import alergenInfoData from '../data/alergenInfo.json';
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

const ProductInfo = ({show, dismiss}) => {
    const alerges = Object.keys(alergenInfoData);
    console.log('alerges, ', alerges)
    return (
        <>
        {
            show ? (
                <Overlay onClick={dismiss}>
                    <Goback onClick={dismiss}><FaArrowLeft style={{fontSize: '2em', color: '#fafafa'}}/></Goback>
                    <Title style={{marginTop: '3em'}}>Información sobre alergenos</Title>
                    <EuropeButton>Reglamento Europeo 1169/11</EuropeButton>
                    <Title style={{fontSize: '.8em'}}>Iconos utilizados</Title>
                    <div style={{padding: '1em', paddingTop: '0'}}>
                        <div style={{border: '4px double silver', padding: '.6em'}}>
                        {
                            alerges.map((item, h) => (
                                <AlergenIcon item={item}/>
                            ))
                        }
                        </div>

                    </div>
                    <Title style={{marginTop: '2em'}}>¿Qué Alérgenos debo declarar o sobre cuales debo informar?</Title>
                    <SubTitle>A pesar de que existen infinidad de posibles alérgenos dentro de los alimentos solo es OBLIGATORIO DECLARAR aquellos de los que contienen alguno de los siguientes 14 elementos:</SubTitle>
                    
                    <div style={{border: '4px double silver', padding: '.3em', margin: '1em'}}>
                        {
                        alerges.map((item, h) => (
                            <AlergenInfo><FaCircle style={{fontSize: '.6em'}}/>&nbsp;&nbsp;{alergenInfoData[item]}</AlergenInfo>
                            ))
                        }
                        </div>
                    
                    <Title style={{marginBottom: '3em'}}>Todos nuestros platos pueden contener trazas de alérgenos declarados en el nuevo Reglamento 1169/2011 de la UE. Si tiene alguna intolerancia o alergia por favor, consulte a nuestro personal para ofrecerles un mejor servicio.</Title>
                </Overlay>            
                ) : (<></>)
        }
        </>

    )
}
export default ProductInfo;