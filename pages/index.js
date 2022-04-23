import React from 'react';
import Head from 'next/head'
import Hero from '../src/components/hero'
import MoreInfo from "../src/components/moreInfo";
import ProjectsContainer from '../src/components/projectsContainer';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <>
    <head>
      <title>David M. Roman | Portfolio</title>
    </head>
      <div className='wrapper'>
        <Hero/>
        <MoreInfo/>
        <ProjectsContainer/>
        <Footer/>
      </div>
    </>
    
  )
}
