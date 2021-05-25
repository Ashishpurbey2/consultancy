import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel1 from '../components/Carousel1'
import ProductCard from '../components/ProductCard'
import { Row, Col } from 'react-bootstrap'

import React from 'react'
import '../asset/css/HomeScreen.css'

const HomeScreen = () => {
  return (
    <div>
      <Carousel1 />
      <div
        className='body_container'
        style={{ paddingTop: '50px', paddingBottom: '50px' }}
      >
        <Row
          clasName='px-auto py-auto section1'
          style={{
            maxWidth: '1558px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Col md={3} sm={6} xs={9} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
          <Col md={3} sm={6} xs={9} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
          <Col md={3} sm={6} xs={9} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
        </Row>
        <br></br>
        <Row
          clasName='px-auto py-auto section1'
          style={{
            maxWidth: '1558px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Col md={3} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
          <Col md={3} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
          <Col md={3} className='pl-auto pr-auto mx-auto'>
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeScreen
