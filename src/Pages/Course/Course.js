import './Course.css'
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { courseData } from '../../data';
import { Container , Row , Col } from 'react-bootstrap';

function Course(){
    const courseId = useParams().courseId;
    const courseInfo = courseData.find(course => course.id == courseId)
    console.log(courseInfo);

    return(
        
        <>
        <MyNavbar />
        <Container>
            <Row>
                <Col>
                <img src={courseInfo.img} />
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
        <footer>
        <Footer />
        </footer>
        </>
      
    )
}
export default Course;