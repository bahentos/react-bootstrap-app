import React from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import styled from 'styled-components'

const Design = styled.div`
.col {
background-color: darkgrey;
border: 1px solid red;


text-align: center;
}
`

const Grid = () => {
    return (
        <>
          <Design>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className={`col-3`}>
                        1
                    </Col>
                    <Col className={`col-6`}>
                        2
                    </Col>
                    <Col className={`col-3`}>
                        3
                    </Col>
                </Row>
              <Row>
                <Col className={`col-9`}>
                  4
                </Col>
                <Col >
                  5
                </Col>
              </Row>
            </Container>
          </Design>
        </>
    )
}


export default Grid