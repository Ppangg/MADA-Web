import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarModule from "../Components/Common/Navbar";
import SidebarMenu from "../Components/Common/Sidebar";
import LoginForm from "../Components/LoginForms";

const Loginpage = () => {
    return (
        <Container fluid className="m-0 p-0">
          <Row style={{backgroundColor:'rgba(128, 144, 160)'}}>
            <Col xs="auto" className="p-0 m-0">
              <SidebarMenu fluid></SidebarMenu>
            </Col>
            <Col fluid>
              <Row className="d-flex justify-content-middle">
                <NavbarModule></NavbarModule>
              </Row>
              <Row>
                <Container className="p-12 m-12">
                  <Container fluid className="p-4 m-4"></Container>
                </Container>
              </Row>
              <Row>
                <Container className="p-12 m-12">
                                <LoginForm></LoginForm>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      );
}

export default Loginpage;