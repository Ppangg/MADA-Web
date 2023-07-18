import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

function NicknameInput() {
  const [nickname, setNickname] = useState('');

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <InputGroup className="">
      <Form.Control
        placeholder="닉네임"
        aria-label="Nickname"
        value={nickname}
        onChange={handleChange}
      />
      <Form.Text className="text-muted" style={{ fontSize: '15px' }}>
        ({nickname.length}/10)
      </Form.Text>
    </InputGroup>
  );
}

export default NicknameInput;
