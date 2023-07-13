import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import styles from './Splash.module.css';
import { ReactComponent as MADACc } from '../../img/Splash/MADA_Cc 2.svg'
import SplashMailLoginInput from './SplashMailLoginInput';

function SplashMailLogin() {
  return (
    <div className={styles.HomeFrame}>
        <Container>
            <Row>뒤로 가기 이미지</Row>
            <Row><MADACc/></Row>
            <Row>
                로그인 후<br/>
                이용해 주세요
            </Row>

            {/* 로그인 정보 입력 컴포넌트 */}
            <Row>
                <SplashMailLoginInput></SplashMailLoginInput>
            </Row>

            <Row>
                <Button onClick={()=> {
                console.log('로그인 버튼이 눌림')
                }}>
                    로그인
                </Button>
            </Row>

            <Row>
                비밀번호를 잊으셨나요?
            </Row>
        </Container>

    </div>
    
  );
}

export default SplashMailLogin;