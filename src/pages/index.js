import React, { useState, useEffect  }  from "react"
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppBody from '../components/Body'
import "../styles/styles.css"

const Wrapper = styled.div`
  max-width: 768px;
  width:100%;
  overflow: hidden;
  margin: 0 auto;
  min-height: 100vh;
  background: rgb(17,17,17);
  background: linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(51,51,51,1) 100%);
`;

export default function Home() {
  let [language, setLanguage] = useState(undefined);
  let [data, setData] = useState(undefined);
  let [alergenInfo, setAlergenInfo] = useState(undefined);
  let [extraText, seExtraText] = useState(undefined);

  
  const changeLanguage = (newLanguage) => setLanguage(newLanguage);
  useEffect(() => {       
    if (language && language.code) {
      import(`../data/${language.code}/menu.json`)
        .then((module) => {
          setData(module);
        })
        .catch((error) => {
          console.error(`Error al importar el archivo de idioma: ${error}`);
        });
  
        import(`../data/${language.code}/alergenInfo.json`)
        .then((module) => {
          let newModule = { ...module }
          delete newModule.default
          setAlergenInfo(newModule);
        })

        import(`../data/${language.code}/misc.json`)
        .then((module) => {
          let newModule = { ...module }
          delete newModule.default
          seExtraText(newModule);
        })
        .catch((error) => {
          console.error(`Error al importar el archivo de idioma: ${error}`);
        });
    }
  }, [language]);

  return (
    <div className="body">
      <Wrapper>
        <Header language={language} changeLanguage={changeLanguage} />
        <AppBody data={data} alergenInfo={alergenInfo} />
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <Footer alergenInfo={alergenInfo} extraText={extraText} style={{position: 'relative'}}/>
        </div>
      </Wrapper>
    </div>
  )
}
