import { ProgressBar } from 'react-bootstrap';

function NickSetProgressBar() {
  return (
    <div>
      <ProgressBar variant="info" now={50} />
    </div>
  );
}

export default NickSetProgressBar;