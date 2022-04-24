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
        <meta name='description' content="I'm David Miguel Roman, a New York based, self-taught, front-end developer with a strong desire to learn and grow."/>
        <meta name="robots" content="all" />
        <meta property="og:title" content="David M. Roman | Portfolio" />
        <meta property="og:description" content="I'm David Miguel Roman, a New York based, self-taught, front-end developer with a strong desire to learn and grow."/>
        <meta property="og:image" content="https://davidmiguel.io/images/portfolio.jpeg"/>
        <link rel="canonical" href="https://davidmiguel.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
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