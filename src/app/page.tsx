'use client'; 

import Header from "./components/header";
import Hero from "./components/hero_category";
import Content1 from "./components/home/content1";
import Container from "./components/styled/container";


export default function Home() {
  
  return (
    <main>
      <Header/>
      <div className='h-lvh'>
        <Container>
          <Hero/>
        </Container>
      </div>

      <div className='bg-slate-100 py-28 rounded-t-[120px] w-full'>
        <Container>
          <Content1/>
        </Container>
      </div>
    </main>
  );
}
