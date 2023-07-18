import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from '../App.module.css';
import Topbar from '../LoginSignUp/Topbar';
import HomeTodo from '../Home/HomeTodo'

function Home() {
    return (
      <div className={styles.Frame}>
          <Container>
              <Row><Topbar/></Row>
              <Row>김마다 님, <br />
                주말을 위해 조금만 더 화이팅!
              </Row>
              <Row>날짜</Row>
              <Row><HomeTodo/></Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default Home;