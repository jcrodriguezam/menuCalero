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

// Array de idiomas
const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' }
  ];
  
  const LanguageSelector = ({language = { code: 'es', label: 'Español', flag: '🇪🇸' }, changeLanguage}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState(language);
  
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      changeLanguage(language)
      setIsOpen(false);
    };
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`language-selector ${isOpen ? 'open' : ''}`}>
        <div className="selected-language" onClick={toggleDropdown}>
          {selectedLanguage.flag}
        </div>
        {isOpen && (
          <div className="dropdown" onClick={() => setIsOpen(!isOpen)} >
            {languages.map((language) => (
              <div
                key={language.code}
                className={`language-option ${language.code === selectedLanguage.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language)}
              >
                {language.flag} {language.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  


const Header = ({language, changeLanguage}) => {
    let [logoIndex, setlogo] = useState(0);
    useEffect(() => {       
        setTimeout(() => {
            const newIndex = logoIndex < fotos.length - 1 ? logoIndex + 1 : 0
            setlogo(newIndex);
        }, 8000);
    });

    return (
        <Wrapper id="header" background={fotos[logoIndex]}>
            <Logo src="calero_logo.png" alt="Barbacoa Calero"/>
            <LanguageSelector language={language} changeLanguage={changeLanguage} />
        </Wrapper>
    )
}

export default Header;