import * as React from 'react'
import {Navbar, Container, Breadcrumb} from "react-bootstrap";

export default function NavBar (props){
     return (
          <Navbar>
               <Container>
                    <Breadcrumb>
                         <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                         <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                              Library
                         </Breadcrumb.Item>
                         <Breadcrumb.Item active>Game</Breadcrumb.Item>
                    </Breadcrumb>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                         <Navbar.Text>
                              Signed in as: <a href="#login">{props.user.name}</a>
                         </Navbar.Text>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     )
}
