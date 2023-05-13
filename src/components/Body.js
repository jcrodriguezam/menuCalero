import React from "react"
import styled from 'styled-components'
import Accordion from './Accordion';
const Wrapper = styled.div`
    position: relative;
    padding-top: 1em;
    flex: 1 0 auto;
    `;

const Body = ({ data = undefined, alergenInfo = undefined}) => {


    return (
        <Wrapper>
            <>
            {data  && data.menu.map((item, i) => (
                <Accordion key={i} data={item} alergenInfo={alergenInfo}/>
            ))}
            </>
        </Wrapper>
    )
}

export default Body;