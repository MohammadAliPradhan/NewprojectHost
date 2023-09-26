import React from 'react';
import SecondarySpace from './SecondarySpace';
import NavBar from './NavBar';
import SectionOne from './SectionOne';
import { useState } from 'react';
import data from './data';
import SectionTwoProducts from './SectionTwoProducts';
import Footer from './Footer';
import Card from './Card';
import OurService from './Service/OurService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const cards = data.map((item) => {
    return (
      <SectionTwoProducts image={item.image} price={item.price} />
    );
  });

  return (
    <Router>
      <>
        <NavBar />
        <SecondarySpace />
        <Card />
        <SectionOne />
        <div className="product-grid">{cards}</div>
        <Footer />

        {/* Move Routes outside of the main content */}
        <Routes>
          <Route path="/getsome" element={<h1>hi</h1>} />
        </Routes>
      </>
    </Router>
  );
}
