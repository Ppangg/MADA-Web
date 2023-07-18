import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from '../App.module.css';
import NickSetProgressBar from './NickSetProgressBar';
import NickInput from './NickInput';

function Topbar() {
    return (
      <div className={styles.Frame}>
          <Container>
              <Row>로그인 Topbar</Row>
              <Row><NickSetProgressBar/></Row>
              <Row>앱에서 사용할 닉네임을<br/>
              설정해주세요</Row>
              <Row><NickInput/></Row>
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
  
  export default Topbar;