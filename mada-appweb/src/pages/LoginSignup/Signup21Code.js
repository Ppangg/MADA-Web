import { React, useState }from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import styles from './LoginSignup.module.css';

function Signup21Code() {
const [isHidden, setIsHidden] = useState(true);

  const handleButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>
        인증 번호 전송
      </Button>
      {!isHidden && <div className={styles.hiddenDiv}>
      
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="인증번호 입력"
            aria-label="VerificationCode"/>
        </InputGroup>
      </div>

      </div>}
    </Container>
  );

  }
  
  export default Signup21Code