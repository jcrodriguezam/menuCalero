import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppBody from '../components/Body'
import "../styles/styles.css"

export default function Home() {
  return (
    <div className="body">
      <Header />
      <AppBody />
      <Footer />
    </div>
  )
}
