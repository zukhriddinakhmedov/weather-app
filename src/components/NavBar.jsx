import { Navbar, Container } from "react-bootstrap";
import { TiWeatherPartlySunny } from "react-icons/ti";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <TiWeatherPartlySunny />
          Weather Forecast
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
