import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styles from './Splash.module.css';

function Signup1() {
    return (
      <div className={styles.HomeFrame}>

          <Container>
            <Signup1Progressbar0/>
            
              <Row>서비스 이용 약관에 <br/>
              동의해주세요.
              </Row>

              <Row>
                <Col>네, 모두 동의합니다. (보기 링크)</Col>
              </Row>
              <Row>
                <Col>(필수)만 14세 이상입니다. (보기 링크)</Col>
              </Row>
              <Row>
                <Col>(필수)서비스 이용약관 동의 (보기 링크)</Col>
              </Row>
              <Row>
                <Col>(필수)개인정보 수집, 이용 동의 (보기 링크)</Col>
              </Row>

              <Row>
                  <Button onClick={()=> {
                  console.log('다음 버튼이 눌림')
                  }}>
                      다음
                  </Button>
              </Row>
          </Container>
  
      </div>
      
    );
  }

function Signup1Progressbar0() {
  const now = 0;
  return <ProgressBar now={now} label={`${now}%`} />;
}
  

export default Signup1;