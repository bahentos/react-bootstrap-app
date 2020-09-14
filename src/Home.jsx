import React from "react";
import Slider from "./Components/Slider";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import desert from './Common/Desert.jpg';
import sea from './Common/more-zakat-volna.jpg'
import Hydrangeas from './Common/Hydrangeas.jpg'
import Lighthouse from './Common/Lighthouse.jpg'
import Jellyfish from './Common/Jellyfish.jpg'
import Jumbotron from './Components/Jumbotron';
import styled from 'styled-components'

const StyleCard = styled.div`
.img-container {
  height: 100px;
  overflow: hidden;
}
`



const Home = () => {
    return (
        <>
            <Slider />
            <StyleCard>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Hydrangeas} />
                            <Card.Body>
                                <Card.Title>Feugiat nulla facilisis</Card.Title>
                                <Card.Text>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Lighthouse} />
                            <Card.Body>
                                <Card.Title>At vero eros et</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Jellyfish} />
                            <Card.Body>
                                <Card.Title>Blandit praesent luptatum</Card.Title>
                                <Card.Text>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </StyleCard>
            <Jumbotron />
            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md={7}>
                            <img src={sea} className={"img-fluid"}/>
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