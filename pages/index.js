import React from 'react';
import Head from 'next/head'
import Hero from '../src/components/hero'
import MoreInfo from "../src/components/moreInfo";
import ProjectsContainer from '../src/components/projectsContainer';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <>
    <Head>
      <title>David M. Roman | Portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet"/>
    </Head>
      <div className='wrapper'>
        <Hero/>
        <MoreInfo/>
        <ProjectsContainer/>
        <Footer/>
      </div>
    </>
    
  )
}
