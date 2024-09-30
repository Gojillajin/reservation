import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Summanry from './Components/summary';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">예약 관리 현황</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">예약 현황</Nav.Link>
            <Nav.Link href="/moon">달은 품은 한옥</Nav.Link>
            <Nav.Link href="/king">의자왕</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Summanry />
    </div>
  );
}

export default App;
