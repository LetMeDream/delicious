import React from 'react'
import Category from '../components/Category'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Cuisine() {
    const params = useParams();
    const [cuisine, setCuisine] = useState([]);

    const getCuisine = async () => {
        console.log(params.type);
        const check = localStorage.getItem(params.type);
        if(check){
            setCuisine(JSON.parse(localStorage.getItem(params.type) ) )
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${params.type}`);
            const data = await api.json();
            console.log(data.recipes, params.type);
            setCuisine(data.recipes);
            localStorage.setItem(params.type, JSON.stringify(data.recipes))
        }

    }

    

    useEffect(()=>{
        getCuisine();
    },[params.type])

    

  return (
    <>
        <Category />
        <Grid>
            {
                cuisine.map(
                    (element) => {
                        return(
                            <Card>
                                <img width='100%' height='100%' src={element.image}></img>
                                <h4>{element.title}</h4>
                                <Gradient></Gradient>
                            </Card>
                                
                        )
                    }
                )
            }
        </Grid>
    </>
  )
}

/* Here we will create our styled components */
const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap:2rem;
  padding:10px 3rem;
`
const Card = styled.div`
  text-align:center;
  min-height:max-content;
  border-radius:10px;
  position:relative;
  overflow:hidden;
  h4{
    position:absolute;
    bottom:25px;
    width:100%;
    color:white;
    text-shadow:1px 1px black;
    font-size:1rem;

    z-index:10;
  }
  img{
    width:100%;
    border-radius:10px;
  }
`
const Gradient = styled.div`
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  border-radius:10px;
  z-index: 12;
  background: linear-gradient(to top, #0000001a, transparent);
`

const Border = styled.div`
    *{
      border:1px solid red;
    }
`


export default Cuisine