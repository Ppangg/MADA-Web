import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from './Splash.module.css';
import { ReactComponent as MADACc } from '../img/Splash/MADA_Cc 2.svg'

function FindPW3() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
              <Row>비밀번호가 변경되었습니다</Row>
              <Row>다시 로그인 해 주세요!</Row>
              <Row><MADACc/></Row>
              <Row>
                  <Button onClick={()=> {
                  console.log('로그인하기 버튼이 눌림')
                  }}>
                      로그인하기
                  </Button>
              </Row>
          </Container>
  
      </div>
      
    );
  }

  export default FindPW3;