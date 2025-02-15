import React from 'react'
import Homepage from '../components/Home'
import Header from '../components/header'
import Hero from '../components/hero_category'
import Content1 from '../components/home/content1'
import Container from '../components/styled/container'

const Home = () => {
  return (
    <div>

        <Header/>
        
        <div className='h-lvh'>
          <Container>
            <Hero/>
          </Container>
        </div>

        <div className='bg-slate-100 py-28 rounded-t-[120px] w-full'>
            <div className='container'>
                <Content1/>
            </div>
        </div>

      {/* <Homepage/> */}
    </div>
  )
}

export default Home
