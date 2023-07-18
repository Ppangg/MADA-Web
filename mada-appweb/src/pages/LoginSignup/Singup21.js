import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import styles from './LoginSignup.module.css';
import Signup21Name from './Signup21Name';
import Signup21PhoneNumber from './Signup21PhoneNumber';
import Signup21Code from './Signup21Code';

function Signup21() {
    return (
      <div className={styles.HomeFrame}>

          <Container>
            <Signup1Progressbar20/>
            
              <Row>성함과 전화번호를 <br/>
              입력해주세요.
              </Row>

              <Row>
                <Signup21Name/>
              </Row>
                <Signup21PhoneNumber/>
              <Row>
                <Signup21Code/>
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

function Signup1Progressbar20() {
  const now = 20;
  return <ProgressBar now={now} label={`${now}%`} />;
}
  

export default Signup21;