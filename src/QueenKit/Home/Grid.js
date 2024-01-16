import { useState } from  'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArrayData from '../../Array';
import './home.css'

const GridExample = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <Row xs={1} md={4} className="g-4">
      {ArrayData.map((item, idx) => (
        <Col key={idx} onMouseEnter={() => setHoveredCard(idx)} onMouseLeave={() => setHoveredCard(null)}>
          <Card className={`cardd ${hoveredCard !== null && hoveredCard !== idx ? 'blur' : ''}`}>
            <Card.Img className='imgg' variant="top" src={item.cover} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
