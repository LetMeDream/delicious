import { GiPizzaCutter, GiHamburger, GiFireBowl, GiChopsticks} from 'react-icons/gi';
import {IoSquareOutline} from 'react-icons/io5'
import React from 'react';
/* Lets import navlinks from react router dom */
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';


function Category() {
  return (
    <Nav>
        <SLink to='/'>
            <IoSquareOutline className='io'></IoSquareOutline>
        </SLink>
        <SLink to='/cuisine/italian'>
                <GiPizzaCutter></GiPizzaCutter>
                <h4>Italian</h4>

        </SLink>
        <SLink to='/cuisine/american'>
                <GiHamburger></GiHamburger>
                <h4>American</h4>

        </SLink>
        <SLink to='/cuisine/thai'>
                <GiFireBowl></GiFireBowl>
                <h4>Thai</h4>

        </SLink>
        
        <SLink to='/cuisine/japanese'>        
                <GiChopsticks></GiChopsticks>
                <h4>Japanese</h4>

        </SLink>
    </Nav>
  )
}

const Nav=styled.div`
        display:flex;
        margin:10px auto;
        justify-content: center;
        align-items: center;
        gap:.5em;
    `
const SLink=styled(NavLink)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:black;
    padding:.75em 1.75em;
    text-decoration: none;
    cursor: pointer;
    transition: .25s all;

    border-radius: 50%;
    width:5rem;
    height:5rem;
    font-size: 1rem;
    :visited{
        color:black;
    }
    &.active{
        color:white;
        background: linear-gradient(to right, #CEE5D0, #CEE5D0);
    }

    :nth-child(1){
        margin-right:1em;
    }
    :not(:nth-child(1)){
        background-color:#FCF8E8;
    }
    :hover:not(:nth-child(1)):not(.active){
        color:#94B49F;
    }

`
export default Category