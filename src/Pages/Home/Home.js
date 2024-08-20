import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../../components/Navbar/Navbar";
import ProgImg from "../../assets/images/programming.svg";

function Home() {
  return (
    <div>
      <>
        <MyNavbar />
        <Container fluid="lg">
          <Row className=" my-5 align-items-center">
            <Col lg={6}>
              <h1>Are You Looking For a <span style={{ color: 'rgb(186,182,253)' }}>Programming</span> Course?</h1>

              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae beatae dignissimos at placeat assumenda alias, amet
                rerum doloribus libero accusantium facilis labore quod expedita,
                itaque hic iure illo quas cum. Molestias distinctio dolores ab
                cumque quasi nemo a, eligendi corporis. Excepturi aspernatur
                inventore consequuntur minus itaque saepe, rem exercitationem
                magnam in nostrum unde adipisci earum, deserunt maxime officiis
                debitis voluptatum. Aperiam tempora natus quis laboriosam,
                commodi neque excepturi corporis veritatis modi, labore
                consequuntur reiciendis optio! Magni quo culpa dolorem?
                Nesciunt, eligendi explicabo ducimus provident ullam modi quo
                expedita eaque sit. Dolorem quos a quaerat earum dolores, eius
                quasi nihil excepturi magnam officia ipsa nulla sit possimus?
                Architecto quod repellat obcaecati est nostrum cumque minus
                aliquam a quam, repudiandae, debitis eos.
              </p>
            </Col>
            <Col lg={6} className="py-4">
              <img src={ProgImg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default Home;
