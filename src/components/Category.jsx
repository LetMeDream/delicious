import { GiPizzaCutter, GiHamburger, GiFireBowl, GiChopsticks} from 'react-icons/gi';
import {IoSquareOutline} from 'react-icons/io5'
import React from 'react';
/* Lets import navlinks from react router dom */
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useState } from 'react';


function Category() {
    const [opened, setOpened] = useState(false);
    const open = (e) => {
        setOpened(!opened)
    }

  return (
    <>
        <Nav>
            <SLink to='/delicious'>
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
        <ResponsiveNav className={`${opened ? 'open' : '' }`}>
            <HamburgueBtn onClick={open} >
                <div className='btn-container'>                
                    <span className={`hamburger-top ${opened ? 'open' : ''}`}></span>
                    <span className={`hamburger-middle ${opened ? 'open' : ''}`}></span>
                    <span className={`hamburger-bottom ${opened ? 'open' : ''}`}></span>
                </div>
            </HamburgueBtn>

            <Menu id="menu" className={`menu ${opened ? 'open' : '' }`}>
                <ResponsiveSLink className={`${opened ? 'open' : ''}`} to='/delicious'>
                    <IoSquareOutline className='io'></IoSquareOutline>
                </ResponsiveSLink>
                <ResponsiveSLink className={`${opened ? 'open' : ''}`} to='/cuisine/italian'>
                        <GiPizzaCutter></GiPizzaCutter>
                        <h4>Italian</h4>

                </ResponsiveSLink>
                <ResponsiveSLink className={`${opened ? 'open' : ''}`} to='/cuisine/american'>
                        <GiHamburger></GiHamburger>
                        <h4>American</h4>

                </ResponsiveSLink>
                <ResponsiveSLink className={`${opened ? 'open' : ''}`} to='/cuisine/thai'>
                        <GiFireBowl></GiFireBowl>
                        <h4>Thai</h4>

                </ResponsiveSLink>
                
                <ResponsiveSLink className={`${opened ? 'open' : ''}`} to='/cuisine/japanese'>        
                        <GiChopsticks></GiChopsticks>
                        <h4>Japanese</h4>

                </ResponsiveSLink>
            </Menu>

        </ResponsiveNav>
    </>

  )
}

const Nav=styled.div`
        display:flex;
        margin:10px auto;
        justify-content: center;
        align-items: center;
        gap:.5em;
        @media (max-width:765px) {
        display:none;
        }
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
    transition: .300s all;
    border-radius: 30px;
    
    width:5.75rem;
    height:3.75rem;
    font-size: 1rem;
    :visited{
        color:black;
    }
    &.active{
        color:white;
        background-color: #0f1922 ;
    }

    :nth-child(1){
        margin-right:1em;
    }
    /* :not(:nth-child(1)){
        background-color:white ;
    } */
    :hover:not(.active){
        color:white;
        background-color: #0f1922 ;
    }   

    `
const ResponsiveSLink=styled(NavLink)`
    opacity:0;
    color:black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display:flex;
    padding:.75em 1.75em;
    text-decoration: none;
    cursor: pointer;
    transition: .25s all;
    border-radius: 10px;
    width:4rem;
    height:2rem;
    font-size: .85rem;
    transition: 1s all;
    /* padding:1rem; */
    border: 1px solid #0f1922;
    color:black;
    &.active{
        background-color:#0f1922 ;
        color:white;
    }
    &.open{
        opacity:1;
    }
    

    :hover:not(:nth-child(1)):not(.active){
    }   
`
const HamburgueBtn=styled.button`
    cursor:pointer;
    z-index:10;
    position:relative;
    border:none;
    background:transparent;

    .btn-container{
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: all 0.25s;
        position: relative;
    }

    .hamburger-top,
    .hamburger-middle,
    .hamburger-bottom {
        position:absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 2px;
        background: #000;
        transform: rotate(0);
        transition: all 0.5s;
        visibility: visible;
        display:block;
  }
  .hamburger-middle {
    transform: translateY(7px);
  }
  
  .hamburger-bottom {
    transform: translateY(14px);
  }
  
  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  
  .open.hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  
  .open.hamburger-middle {
    display: none;
  }
  
  .open.hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }

    `
const Menu=styled.div`
    gap:4px;
    position:absolute;
    padding:4px;
    border-radius:.5em;
    width:100%;
    height: 100vh;
    align-items: center;
    display:flex;
    flex-direction: column;
    padding-block: 1.25rem;
    cursor:pointer;
    z-index:20;
    top:40px;
    background:transparent;
    transition: all 1s;
    pointer-events: none;
    &.menu{
        background:transparent;
        position:absolute;
    }
    &.open{
        background: white;
        transition: all 1s;
        pointer-events: all;
    }
    `
const ResponsiveNav=styled.div`
    top:10px;
    padding-block: 1.5em;
    padding-bottom: 2em ;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width:765px) {
        display:none;
    }

    `
export default Category