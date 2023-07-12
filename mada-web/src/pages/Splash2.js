import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Splash.module.css';
import { ReactComponent as MADACc } from '../img/Splash/MADA_Cc 2.svg'

function Splash2() {
  return (
    <div className={styles.HomeFrame}>
      <Container>

        <Row>MADA
        <br/>매일마다 작성하는 일정관리 서비스
        </Row>

        <Row>
          마다 캐릭터 이미지 <MADACc />
        </Row>

        <Row>소셜 로그인 버튼 이미지</Row>
        <Row>
          <Col xs={6}>
            <Button onClick={()=> {
              console.log('전화번호로 회원가입 버튼이 눌림')
            }}>
              전화번호로 회원가입
            </Button>
          </Col>
          <Col xs={6}>
            <Button onClick={()=> {
              console.log('전화번호로 로그인 버튼이 눌림')
            }}>
              전화번호로 로그인
            </Button>
          </Col>
        </Row>
    </Container>

    </div>
  );
}

export default Splash2;
