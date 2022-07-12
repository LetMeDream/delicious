import { GiPizzaCutter, GiHamburger, GiFireBowl, GiChopsticks} from 'react-icons/gi';
import React from 'react';
/* Lets import navlinks from react router dom */
import { NavLinks } from 'react-router-dom';
import styled from 'styled-components';


function Category() {
  return (
    <Nav>
        <div>
            <GiPizzaCutter></GiPizzaCutter>
            <h4>Italian</h4>
        </div>
        <div>
            <GiHamburger></GiHamburger>
            <h4>American~fuckyea~</h4>
        </div>
        <div>
            <GiFireBowl></GiFireBowl>
            <h4>Thai</h4>
        </div>
        <div>
            <GiChopsticks></GiChopsticks>
            <h4>Japanese</h4>
        </div>
    </Nav>
  )
}

const Nav=styled.div`
        display:flex;
        margin:0 auto;
        justify-content: center;
        gap:1em;
        
        max-width:50vw;
        div{
            display:flex;
            padding:.75em;
            cursor: pointer;
            :hover{
                color:gray;
            }

        }
    `

export default Category