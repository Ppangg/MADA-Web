import React from 'react';
import { Container, Row, Button, ProgressBar } from 'react-bootstrap';
import styles from './LoginSignup.module.css';
import Signup31Password from './Signup31Password';

function Signup31() {
    return (
      <div className={styles.HomeFrame}>
          <Container>
            <Signup1Progressbar60/>
              <Row>비밀번호를 <br/>
                입력해 주세요.
              </Row>
              <Row>
                <Signup31Password/>
              </Row>
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
  
  function Signup1Progressbar60() {
    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;
  }
    

  export default Signup31;