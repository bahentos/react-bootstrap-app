import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import desert from '../Common/Desert.jpg'
import styled from 'styled-components'

const Styles = styled.div`
.jumbo {
    background: url(${desert}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
    }
.overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
`

const Jumbotron = () => (

    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Web Developer Blog</h1>
                <p>Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения модели развития. Товарищи! новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
                </p>
                <p>Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий. Товарищи! укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.
                </p>
            </Container>
        </Jumbo>
    </Styles>



)

export default Jumbotron