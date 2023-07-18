import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from '../App.module.css';
// import { ReactComponent as MADACc } from '../img/Splash/MADA_Cc 2.svg'
// import SplashMailLoginInput from './SplashMailLoginInput';

function Topbar() {
    return (
      <div className={styles.Frame}>
          <Container>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row>
                  <Button onClick={()=> {
                  console.log('로그인 버튼이 눌림')
                  }}>
                      로그인
                  </Button>
              </Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default Topbar;