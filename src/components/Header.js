import React, { useState, useEffect  }  from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    background: linear-gradient(0deg,#222,#333);
    margin: 0;
    padding: 1em;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 0px 20px rgba(0,0,0,.8);
    background-image: url(barbacoa.jpg);
    background-image: ${props => (props.background ? `url(${props.background})` : 'url(barbacoa.jpg)')};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 180px;
    display: flex;
    background-position-y: top;
    transition: all 5s ease;
`;

const Logo = styled.img`
    height: 80px;
    margin: 0px auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    opacity: .8;
`
const fotos = [
    "barbacoa.jpg",
    "cafe.jpg",
    "jamon.jpg",
    "bar.jpg",
    "terraza.jpg"
]

const Header = () => {
    let [logoIndex, setlogo] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newIndex = logoIndex < fotos.length - 1 ? logoIndex + 1 : 0
            setlogo(newIndex);
         }, 8000);
       });

    return (
        <Wrapper background={fotos[logoIndex]}>
            <Logo src="calero_logo.png" alt="Barbacoa Calero"/>
        </Wrapper>
    )
}

export default Header;