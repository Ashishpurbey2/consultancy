import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../asset/css/carousel.css'

const Carousel1 = () => {
  return (
    <div>
      <img src='../asset/images/panaroma1.jpg'></img>
      <Carousel
        fade
        style={{
          maxWidth: '1558px',
          height: '400px',
          backgroundColor: 'black',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '2px solid black',
          overflow: 'hidden',
        }}
      >
        <Carousel.Item>
          <img
            className='d-block w-100 manage'
            src='./images/panaroma2.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 style={{ fontSize: '40px', zIndex: '100', color: 'black' }}>
              Second slide label
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/panaroma1.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 hello'
            src='./images/weilding.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousel1
