import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from './LoginSignup.module.css';
import Signup31Password from './Signup31Password.js'

function FindPW21() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
              <Row>뒤로 가기 이미지</Row>
              <Row>
                새로운 비밀번호를 <br/>
                입력해주세요
              </Row>
              <Row><Signup31Password/></Row>
              <Row>
                  <Button onClick={()=> {
                  console.log('완료하기 버튼이 눌림')
                  }}>
                      완료하기
                  </Button>
              </Row>
          </Container>
  
      </div>
      
    );
  }

export default FindPW21;