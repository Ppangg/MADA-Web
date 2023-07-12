import { Form, Dropdown, Col } from 'react-bootstrap';

function Signup21PhoneNumber() {
    return (
      <div>
        <Col>
        <Dropdown>
          <Dropdown.Toggle variant="dropdown-basic-button" id="dropdown-basic">
            SKT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/KT">KT</Dropdown.Item>
            <Dropdown.Item href="#/LGU+">LGU+</Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>
        </Col>

        <Form.Control 
            placeholder="000"
            aria-label="first"
            required />
            -
        <Form.Control 
            placeholder="0000"
            aria-label="middle" />
            -
        <Form.Control 
            placeholder="0000"
            aria-label="last" />

      </div>
    );
  }

export default Signup21PhoneNumber;