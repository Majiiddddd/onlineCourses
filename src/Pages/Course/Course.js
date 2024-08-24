import "./Course.css";
import MyNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { courseData } from "../../data";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Course() {
  const courseId = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId);
  console.log(courseInfo);

  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img src={courseInfo.img} />
          </Col>
          <Col md={7} className="my-3">
            <h2>{courseInfo.title}</h2>
            <p>Majid Abolfathi</p>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{textAlign : 'justify'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              neque aliquid consectetur nulla, cum sapiente nostrum maiores,
              facere tenetur quibusdam commodi recusandae necessitatibus
              laborum, fugiat numquam reiciendis ex! Deserunt, dolores!
              Provident quos, assumenda voluptatibus enim animi accusamus
              exercitationem tenetur! Delectus similique quidem possimus
              voluptates fuga a, temporibus beatae. Exercitationem, eveniet
              officiis nulla suscipit animi voluptates vitae quibusdam provident
              ipsa voluptatum? Atque reiciendis illum laborum, exercitationem
              ipsam itaque repellendus esse impedit iste explicabo placeat omnis
              ex excepturi eum saepe! Repudiandae corporis fuga nesciunt.
              Provident, harum itaque suscipit voluptatibus quam perspiciatis
              iure.
            </p>
            <Button variant="success">Add to Card</Button>{' '}
          </Col>
        </Row>
      </Container>
     
     
   </>
  );
}
export default Course;
