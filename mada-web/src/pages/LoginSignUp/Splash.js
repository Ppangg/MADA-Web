import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../App.module.css';
import { ReactComponent as MADACc } from '../../img/LoginSignUp/MADA_Cc 2.svg'
import { ReactComponent as Default } from '../../img/Component/Default.svg'

function Splash() {
    return (
      <div className={styles.Frame}>
          <Container>
            <Row><Default/></Row>
            <Row><MADACc/></Row>
            <Row>소셜 로그인 버튼</Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default Splash;