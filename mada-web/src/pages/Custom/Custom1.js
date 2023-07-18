import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../App.module.css';
import CustomTab from './CustomTab';

function Custom1() {
    return (
      <div className={styles.Frame}>
          <Container>
              <Row>My Character</Row>
              <Row>
                <Col>마다 캐릭터</Col>
                <Col><CustomTab/></Col>
              </Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default Custom1;