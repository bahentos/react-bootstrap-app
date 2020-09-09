import React from "react";
import {Carousel} from "react-bootstrap";
import desert from '../Common/Desert.jpg'
import Penguins from '../Common/Penguins.jpg'
import Koala from '../Common/Koala.jpg'
import styled from 'styled-components'


const NewDesign = styled.div`
.carousel-caption {
  color: white;
  font-size: 2rem;
}

.carousel-caption h3 {
  color: white;
  font-size: 3rem;
}

.carousel-item {
    position: relative;
    height: 400px;
  }
 
 .carousel-indicators li {
  height: 10px;
  margin-right: 10px;
 }
 
  .carousel-indicators li:hover {
  background-color: rebeccapurple;
 }

`


const Slider = () => {
    return (
        <>
            <NewDesign>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{position: "absolute", top: "-200px"}}
                            className="d-block w-100"
                            src={desert}
                            alt="First Slide"
                        />

                        <Carousel.Caption>
                            <h3>Web Developer Blog</h3>
                            <p>Do do nostrud est aliqua</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{position: "absolute", top: "-50px"}}
                            className="d-block w-100"
                            src={Penguins}
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h3>Web Developer Blog</h3>
                            <p>Do do nostrud est aliqua</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{position: "absolute", top: "-350px"}}
                            className="d-block w-100"
                            src={Koala}
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h3>Web Developer Blog</h3>
                            <p>Do do nostrud est aliqua</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </NewDesign>
        </>
    )
}

export default Slider;