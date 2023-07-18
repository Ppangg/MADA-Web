import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './Home.module.css';

function HomeTodo() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
              <Row>오른쪽 메뉴</Row>
              <Row>텍스트</Row>
              <Row></Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default HomeTodo;