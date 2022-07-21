import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";

import React from 'react'

function Recipe() {

  const params = useParams();
  /* details hold our details Object */
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')


  const getRecipe = async () =>{
    let api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    let json = await api.json();
    console.log(json);
    setDetails(json);
  }

  useEffect(()=>{
    getRecipe()
  },[])

  return (
    <>  
        <Category/>
        <Search/>
        <DetailWrapper>
          <div>
            <h2>{details.title}</h2>
            <img src={details.image}  alt="" />
          </div>
          <Info>
            <div>
              <Button className={activeTab === 'instructions' ? 'active' : ''} 
                      onClick={ () => setActiveTab('instructions') }>
                        Instruccions
              </Button>
              <Button className={activeTab === 'ingredients' ? 'active' : ''} 
                      onClick={ () => setActiveTab('ingredients') }>
                        Ingredients
              </Button>
            </div>
          </Info>
        </DetailWrapper>
    </>

  )
}

const DetailWrapper = styled.div`
  margin-top:2rem;
  display:flex;
  justify-content: center;
  .active{
    color:white;
    background:linear-gradient(35deg, #7D9D9C, #576F72);
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size:1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top:2rem;
  }

`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-inline: 1rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 5rem;
  border:1px solid red;
  div{
    display:flex;
    justify-content: space-around;
  }
`

export default Recipe