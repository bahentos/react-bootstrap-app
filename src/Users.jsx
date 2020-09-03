import React from "react";
import desert from './Common/Desert.jpg'
import styled from 'styled-components'

const Newdiv = styled.div `
  height: 400px;
  overflow: hidden;
  position: relative;
`

const Users = () => {
    return (
        <>
            <Newdiv>
                <img style={{'top': "-100px"}} src={desert} alt=""/>
            </Newdiv>
        </>
    )
}


export default Users