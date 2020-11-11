import React from "react"
import styled from 'styled-components'
import Accordion from './Accordion';
import data from '../data/menu.json';

const Wrapper = styled.div`
    position: relative;
    padding-top: 1em;
    flex: 1 0 auto;
    `;

const Body = () => {
    return (
        <Wrapper>
            <>
            {data && data.menu.map((item, i) => (
                <Accordion key={i} data={item} />
            ))}
            </>
        </Wrapper>
    )
}

export default Body;