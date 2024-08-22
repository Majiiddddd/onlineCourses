import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer">
          <Col>
            <h2>MA Academy</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus quisquam explicabo possimus? Qui libero autem
              expedita quod sit voluptate. Atque quae fugiat consequuntur, quasi
              sint omnis. Error libero sunt ad. Perspiciatis similique libero
              doloremque veritatis fugit repellat harum minus.
            </p>
          </Col>
          
          <Col style={{textAlign: 'right'}}>
          <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
