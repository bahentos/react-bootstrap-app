import React from "react";
import Slider from "./Components/Slider";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import desert from './Common/Desert.jpg';
import sea from './Common/more-zakat-volna.jpg'
import Jumbotron from './Components/Jumbotron';
const Home = () => {
    return (
        <>
            <Slider />
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={desert} />
                            <Card.Body>
                                <Card.Title>Web Dev Blog</Card.Title>
                                <Card.Text>
                                    Cillum excepteur aliquip mollit nulla aute cillum et esse labore
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={desert} />
                            <Card.Body>
                                <Card.Title>Web Dev Blog</Card.Title>
                                <Card.Text>
                                    Cillum excepteur aliquip mollit nulla aute cillum et esse labore
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={desert} />
                            <Card.Body>
                                <Card.Title>Web Dev Blog</Card.Title>
                                <Card.Text>
                                    Cillum excepteur aliquip mollit nulla aute cillum et esse labore
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron />
            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md={7}>
                        <img src={sea} height={400} />
                    </Col>
                    <Col md={5}>
                        <h2>Заголовок этого бессмысленного текста</h2>
                    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Home