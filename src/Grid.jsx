import React from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import styled from 'styled-components'

const Design = styled.div`
.col {
background-color: darkgrey;
border: 1px solid red;
text-align: center;
}
.row {
height: 100px;
background-color: bisque;
border: 2px solid darkblue;
}

`

const Grid = () => {
    return (
        <>
          <Design>
            <Container className="mt-2 mb-2">
                <Row className={''}>
                    <Col className={`col-sm-3 align-self-start`}>
                        1
                    </Col>
                    <Col className={`col-sm-6 align-self-center`}>
                        2
                    </Col>
                    <Col className={`col-sm-3 align-self-end`}>
                        3
                    </Col>
                </Row>
              <Row className={'align-items-end'}>
                <Col className={`col-sm-9`}>
                  4
                </Col>
                <Col className={`col-sm-3`}>
                  5
                </Col>
              </Row>
            </Container>
          </Design>
        </>
    )
}


export default Grid