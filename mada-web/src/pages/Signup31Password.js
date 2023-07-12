import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function Signup31Password() {
  return (
    <div>      
      <InputGroup className="none">
        <Form.Control
          type="password"
          id="inputPassword"
          placeholder="비밀번호"
          aria-describedby="passwordHelpBlock"/>
      < Form.Text id="passwordHelpBlock" muted></Form.Text>
      </InputGroup>

      <InputGroup className="none">
        <Form.Control
          type="password"
          id="inputPassword"
          placeholder="비밀번호 재확인"
          aria-describedby="passwordHelpBlock"/>
      </InputGroup>
    

    </div>
  );
}

export default Signup31Password;