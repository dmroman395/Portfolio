import Head from 'next/head'
import Image from 'next/image'
import Hero from '../src/components/hero'
import MoreInfo from "../src/components/moreInfo";
import ProjectsContainer from '../src/components/projectsContainer';

export default function Home() {
  return (
    <>
      <Hero/>
      <MoreInfo/>
      <ProjectsContainer/>
    </>
  )
}
