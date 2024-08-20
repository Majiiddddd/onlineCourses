import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseItem.css'
function CourseItem({title , img ,text} ){
    return(
        <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body>
    </Card>
    )
}

export default CourseItem;