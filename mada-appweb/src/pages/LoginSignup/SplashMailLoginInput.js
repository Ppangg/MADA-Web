import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function SplashMailLoginInput() {
  return (
    <div>
      <InputGroup className="none">
        <Form.Control
          placeholder="전화번호"
          label="phoneNumber"/>
      </InputGroup>
      
      <InputGroup className="none">
        <Form.Control
          type="password"
          id="inputPassword"
          placeholder="비밀번호"
          aria-describedby="passwordHelpBlock"/>
      < Form.Text id="passwordHelpBlock" muted></Form.Text>
      </InputGroup>
    

    </div>
  );
}

export default SplashMailLoginInput;