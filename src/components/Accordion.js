import React, { useState }  from "react"
import styled from 'styled-components'
import {
    FaChevronDown,
    FaChevronUp,
    FaEuroSign,
    FaExclamationCircle
} from 'react-icons/fa';
import ProductInfo from './ProductInfo';

const Wrapper = styled.div`
    padding: 0;
    overflow: hidden;
    flex: 1 0 auto;
    transition: all .6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AHeader = styled.div`
    color: #e0b668;
    font-weight: 300;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    margin: auto;
    justify-content: space-between;
    box-shadow: 0px 0px 20px rgba(0,0,0,.8);
    border-bottom: 1px solid #1b1b1a;
    padding: .5em 1em;
    font-family: 'Trispace', sans-serif;

`;

const ABody = styled.div`
    color: #fff;
    margin: 0;
    overflow: hidden;
    transition: all .6s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: ${props => props.show ? '1000vh' : 0};
`;


const MenuWrapper = styled.div`
    margin: 0;
    padding: 0em;
`;

const Item = styled.div`
    list-style: none;
    display: flex;
    flex-flow: column;
    margin: auto;
    justify-content: space-between;
    color: #fff;
    padding: .5em 1.5em;
    font-weight: 100;
    background-color: ${props => (props.background || 'transparent')};
    background: ${props => (props.promo ? 'radial-gradient(circle, rgba(49,46,36,.7) 0%, rgba(51,51,51,0) 100%)' : '')};
`;
const ItemMain = styled.div`
    font-family: 'M PLUS Rounded 1c', sans-serif;
    flex-flow: row;
    display: flex;
    justify-content: space-between;
    font-weight: 100;
`;
const ItemExtra = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 100;
    font-size: .8em;
    max-width: 85%;
    opacity: .8
`;
const ItemElement = styled.div`
    display: flex;
    font-weight: 100;
    font-size: .8em;
    opacity: .9;
    padding-left: 1em;
`;
const ItemExtra2 = styled.div`
    display: flex;
    font-weight: 300;
    font-size: .8em;
    opacity: .9;
    color: #f1e1cb;
    font-style: italic;
`;
const Promo = styled.div`
    border: ${props => (props.isActive ? '4px double silver' : '')};
    padding: ${props => (props.isActive ? '.6em' : '')};
`;

const AHeaderSubtitle = styled.div`
    color: #e0b668;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    margin: auto;
    font-family: 'Trispace', sans-serif;
    font-size: .8em;
    justify-content: flex-start;
    width: 100%;
    padding: .3em;
`;

const ASubItemSubtitle = styled.div`
    color: #e0b668;
    font-weight: 100;
    text-transform: uppercase;
    display: flex;
    margin: auto;
    font-family: 'Trispace', sans-serif;
    font-size: .8em;
    justify-content: space-between;
    width: 100%;
    padding: .5em 2em;
    background-color: rgba(0,0,0,.5)
`;

const Icon = styled.img`
    object-fit: contain;
    max-width: 1.6em;
    opacity: .8;
    display: inline-flex;
    margin-left: .5em;
`;

const ItemImage = styled.img`
    height: 120px;
    margin: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom:1em;
    box-shadow: 0px 4px 15px rgba(0,0,0,.8);
    `

function getBackground(i, subtitle ) {
    if (subtitle && i === 0) return 'rgba(0,0,0,.5)';
    if (i % 2 === 0) return 'rgba(0,0,0,.2)';
    return 'transparent';
}

const AccordionHeader = ({title, show, toggle}) => {
    return(
        <AHeader onClick={toggle}>
            {title}
            { show ? <FaChevronUp /> : <FaChevronDown />}
        </AHeader>
    )
};
const Alergens = ({item, showInfo}) => {
    return (
        <>
            {item.alergen ? (
                <div style={{display: 'flex', justifyContent: 'flex-end'}} >
                    {item.alergen.map((alergen, k) => (
                        <Icon 
                            onClick={() => showInfo(item)}
                            key={k} 
                            alt={alergen}
                            src={`${alergen}.png`}
                        />
                    ))}
                </div>
            ) : (<></>)}
        </>
    )
}

const MainItem = ({item, showInfo}) => {
    return(
        <ItemMain>
            <div style={{display: 'flex', width: '80%'}}>
                <span><b>{item.title}</b></span>    
                <Alergens item={item} showInfo={showInfo} />
            </div>
            <span style={{whiteSpace: 'nowrap'}}>
                <b>{item.price}</b>
                <FaEuroSign style={{fontSize: '.8em', opacity: '.6'}}/>
            </span>    
        </ItemMain>
    )
};

const AccordionItem = ({index, subtitle, item, background, showInfo}) => {
    return(
            <Item key={index} background={background} promo={item.promo}>
                {subtitle && index === 0? ( <AHeaderSubtitle>{subtitle}</AHeaderSubtitle> ) : (<></>) }
                {item.title ? (
                    <Promo isActive={item.promo}>
                        {item.image ? (
                           <ItemImage src={item.image} alt={item.title} />
                        ) : (<></>)}
                        <MainItem item={item} showInfo={showInfo} />
                            {item.def ? (<ItemExtra>{item.def}</ItemExtra>) : '' }
                            {item.items && item.items.length ? (
                                <>
                                    {item.items.map((element, j) => (
                                        <ItemElement key={j}>{element}</ItemElement>
                                    ))}
                                </>
                            ) : (<></>)  }
                    </Promo>) : (<></>) 
                }
                
                {item.extra ? ( 
                    <ItemExtra2>
                        <FaExclamationCircle style={{minWidth: '1.5em'}}/> &nbsp; {item.extra}
                        <Alergens item={item} showInfo={showInfo} />
                    </ItemExtra2> ) : '' }
            </Item>
    )
};

const Accordion = (data) => {
    const [show, setShow] = useState(false);
    const [showAlergenProductInfo, setShowAlergenProductInfo] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const toggle = () => { setShow(!show) }
    const toggleAlergenProductInfo = (item) => { setSelectedItem(item); setShowAlergenProductInfo(!showAlergenProductInfo) }
    const menu = data.data;
    const title = Object.keys(menu)[0];
    let subtitle = menu[title].find((m) => m.subtitle);
    subtitle = subtitle && subtitle.subtitle ? subtitle.subtitle : '';

    return (
        <>
            {title ? (
                <>
                    <ProductInfo show={showAlergenProductInfo} dismiss={toggleAlergenProductInfo} data={selectedItem}/>
                    <Wrapper>
                        <AccordionHeader title={title} show={show} toggle={toggle} />
                            <ABody show={show}>
                                <MenuWrapper>
                                {menu && menu[title].map((item, i) => (
                                    <>
                                    { 
                                        Array.isArray(item[Object.keys(item)[0]]) ? 
                                        (
                                            <>
                                                <ASubItemSubtitle>{Object.keys(item)[0]}</ASubItemSubtitle>
                                                {item[Object.keys(item)[0]].map((subItem, h) => (
                                                    <AccordionItem
                                                        key={h} 
                                                        index={h}
                                                        subtitle={subtitle}
                                                        item={subItem}
                                                        background={getBackground(h, subtitle)}
                                                        showInfo={toggleAlergenProductInfo}
                                                        />
                                                ))}
                                            </>
                                        ) : (
                                            <AccordionItem
                                                key={i}
                                                index={i}
                                                subtitle={subtitle}
                                                item={item}
                                                background={getBackground(i, subtitle)}
                                                showInfo={toggleAlergenProductInfo}
                                            />
                                        )
                                    }
                                    </>
                                ))}
                                </MenuWrapper>
                            </ABody>
                    </Wrapper>
                </>
            ) : ''}
        </>
    )
}

export default Accordion;