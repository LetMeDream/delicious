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
    setDetails(json);
    console.log(json);
  }

  useEffect(()=>{
    getRecipe()
  },[])

  return (
    <>  
        <Category/>
        <Search/>
        <DetailWrapper>
          <ImageSide>
            <h2>{details.title}</h2>
            <img src={details.image}  alt="" />
          </ImageSide>
          <Info>
            <div className='buttons'>
              <Button className={activeTab === 'instructions' ? 'active' : ''} 
                      onClick={ () => setActiveTab('instructions') }>
                        Instruccions
              </Button>
              <Button className={activeTab === 'ingredients' ? 'active' : ''} 
                      onClick={ () => setActiveTab('ingredients') }>
                        Ingredients
              </Button>
            </div>

            { activeTab === 'instructions' && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <br/>
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
              </div>
            )}

            { activeTab === 'ingredients' && (
              <ul style={{listStylePosition:'inside'}}>
                { details.extendedIngredients?.map( (ingredient)=>{
                  return <li id={details.id}>{ingredient.original}</li>
                } ) }
              </ul>
            ) }
            


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

  @media (max-width: 785px){
      flex-direction: column;
      align-items: center;
  }

`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-inline: 1rem;
  margin-bottom:1em;
  font-weight: 600;
  cursor:pointer;
`

const Info = styled.div`
  margin-left: 5rem;
  width:40%;
  /* border:1px solid red; */
  div.buttons{
    display:flex;
    justify-content: space-around;
  }

  @media (max-width: 785px){
    margin-left: 0rem;
    width: 90%;
  }

`

const ImageSide = styled.div`
  h2{
    text-align: center;
    @media (min-width: 785px){
      text-align: left;
    }
  }
  img{
    @media (max-width: 785px){
      width: 90%;
      margin-inline:auto;
      display:block;
      margin-bottom: 2rem;
    }
  }
`

export default Recipe