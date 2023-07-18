import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Home.module.css';

function TimeAdd() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
              <Row>
                <Col>뒤로가기</Col>
                <Col>시간표</Col>
                <Col>등록 버튼</Col>
               </Row>
              <Row>텍스트</Row>
              <Row></Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default TimeAdd;