import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarModule from "../Components/Common/Navbar";
import SidebarMenu from "../Components/Common/Sidebar";

const Mypage = () => {
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
               {/* 여기에 넣기 */}
              </Row>
            </Col>
          </Row>
        </Container>
      );
}

export default Mypage;