import React from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../asset/css/Header.css'
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'

const Header = () => {
  return (
    <div className='nav_dimension'>
      <Navbar
        fixed='top'
        className='pt-0 pb-0  nav_color position '
        collapseOnSelect
        expand='md'
        variant='light'
      >
        <Navbar.Brand href='#home'>
          <div
            style={{
              fontFamily: 'Londrina Shadow ,cursive',
              fontWeight: '800',
              fontSize: '50px',
            }}
          >
            company
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
                style={{ borderRadius: '20px 0px 0px 20px' }}
              />
              <Button
                variant='outline-info'
                size='sm'
                style={{
                  width: '1.2rem',
                  height: '2.8rem',
                  borderRadius: '0px 20px 20px 0px',
                  marginLeft: '-10px',
                  borderColor: 'rgb(247,247,249)',
                  backgroundColor: 'rgb(247,247,249)',
                }}
              >
                <i
                  className='fas fa-search'
                  style={{
                    position: 'relative',
                    color: 'black',
                    fontSize: '18px',
                    paddingRight: '20px',
                    right: '10px',
                  }}
                ></i>
              </Button>
            </Form>
            <Nav.Link href='/feature' className='text-color'>
              <div className='hover shadow-box-example hoverable '>
                Features
              </div>
            </Nav.Link>
            <Nav.Link href='/career' className='text-color'>
              <div className='hover'>About</div>
            </Nav.Link>
            <Nav.Link href='/career1' className='text-color'>
              <div className='hover'>Careers</div>
            </Nav.Link>

            <DropdownButton
              menuAlign='right'
              title='Register'
              id='dropdown-menu-align-right'
              className='dropdown1'
              size='sm'
            >
              <Dropdown.Item eventKey='1'>Partner</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='2'>customer</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
