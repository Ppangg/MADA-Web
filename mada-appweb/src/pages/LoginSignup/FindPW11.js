import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from './LoginSignup.module.css';
import Singup21PhoneNumber from './Signup21PhoneNumber.js'
import Signup21Code from './Signup21Code';

function FindPW11() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
              <Row>뒤로 가기 이미지</Row>
              <Row>
                가입한 전화번호를 <br/>
                입력해주세요
              </Row>
              <Row><Singup21PhoneNumber/></Row>
              <Row><Signup21Code/></Row>
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

export default FindPW11;