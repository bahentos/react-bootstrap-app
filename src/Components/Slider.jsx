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
  height: 5px;
  margin-right: 10px;
 }
 
  .carousel-indicators li:hover {
  background-color: rebeccapurple;
 }

`

const NewKoala = styled.div`
  
@media (min-width: 1440px) {
 img {
  position: absolute;
    top: -500px;
  }
}

@media (min-width: 1170px) and (max-width: 1439px) {
 img {
  position: absolute;
    top: -400px;
  }
}

@media (min-width: 990px) and (max-width: 1169px) {
 img {
  position: absolute;
    top: -300px;
  }
}

@media (min-width: 780px) and (max-width: 989px) {
 img {
  position: absolute;
    top: -200px;
  }
}

@media (min-width: 540px) and (max-width: 779px) {
 img {
  position: absolute;
    top: -100px;
  }
}



@media (min-width: 320px) and (max-width: 539px) {
 img {
  position: absolute;
    top: 0px;
  }
}
`

const NewSunset = styled.div`
  
@media (min-width: 1440px) {
 img {
  position: absolute;
    top: -300px;
  }
}

@media (min-width: 1170px) and (max-width: 1439px) {
 img {
  position: absolute;
    top: -250px;
  }
}

@media (min-width: 990px) and (max-width: 1169px) {
 img {
  position: absolute;
    top: -150px;
  }
}

@media (min-width: 780px) and (max-width: 989px) {
 img {
  position: absolute;
    top: -50px;
  }
}

@media (min-width: 540px) and (max-width: 779px) {
 img {
  position: absolute;
    top: -0px;
  }
}


`


const Slider = () => {
    return (
        <>
            <NewDesign>
                <Carousel>
                    <Carousel.Item>
                        <NewSunset>
                            <img
                                className="img-fluid w-100"
                                src={desert}
                                alt="First Slide"
                            />
                        </NewSunset>
                        <Carousel.Caption>
                            <h3>Web Developer Blog</h3>
                            <p>Do do nostrud est aliqua</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid w-100"
                            src={Penguins}
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h3>Web Developer Blog</h3>
                            <p>Do do nostrud est aliqua</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewKoala>
                            <img
                                className="img-fluid w-100"
                                src={Koala}
                                alt="First Slide"
                            />
                        </NewKoala>
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