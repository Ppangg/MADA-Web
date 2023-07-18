import React from 'react';
import { Container, Row, Button, ProgressBar } from 'react-bootstrap';
import styles from './LoginSignup.module.css';
import { ReactComponent as MADACc } from '../../img/Splash/MADA_Cc 2.svg'

function Signup4() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
            <Signup1Progressbar100/>
              <Row>회원가입 완료!</Row>
              <Row>이제 마다를 본격적으로 즐겨 보세요</Row>
              <Row><MADACc/></Row>
              <Row>
                  <Button onClick={()=> {
                  console.log('마다 시작하기 버튼이 눌림')
                  }}>
                      마다 시작하기
                  </Button>
              </Row>
          </Container>
  
      </div>
      
    );
  }
  
  function Signup1Progressbar100() {
    const now = 100;
    return <ProgressBar now={now} label={`${now}%`} />;
  }

  export default Signup4;