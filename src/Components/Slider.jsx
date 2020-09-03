import React from "react";
import {Carousel} from "react-bootstrap";
import desert from '../Common/Desert.jpg'
import styled from 'styled-components'

const Styles = styled.div`
  .carousel-item {
    height: 400px
  }
`




const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{'height': '400px'}}>
                    <img
                        className="d-block w-100"
                        src={desert}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>Web Developer Blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '400px'}}>
                    <img
                        className="d-block w-100"
                        src={desert}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>Web Developer Blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '400px'}}>
                    <img
                        className="d-block w-100"
                        src={desert}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3>Web Developer Blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Slider;