import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'; 
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";


function Veggie() {
  /* We need a State variable (Array) in order to save our Veggies */
  const [veggies, setVeggies] = useState( [] );
  /* We will also need a function that executes, at least, everytime our browser loads.
  ** Said function will return our veggies for us.
  */
  const getVeggies = async () => {

    if(localStorage.getItem('veggies')){
      setVeggies(JSON.parse(localStorage.getItem('veggies')))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`)
      const jsonData = await api.json();
      setVeggies(jsonData.recipes);
      localStorage.setItem('veggies', JSON.stringify(jsonData.recipes))
    }

  }

  useEffect( () => {
    getVeggies();
  }, [] );
  

  return (
    <React.Fragment>
      <Title>
        <h2>Here we have some ~weak~ vegetarian options..:</h2>

        <Wrapper>
            <Splide 
              options={ {
                rewind: true,
                perPage: 4,
                perMove: 1,
                updateOnMove: true,
                focus:'center',
                gap: '20px',
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                }
              } 
            }>
              {
                veggies.map((recipe) => {       
                    return (
                      <SplideSlide className='  '>
                          <Card key={recipe.id}> 
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient></Gradient>
                          </Card>  

                      </SplideSlide>         
                    );           
                })
              }
            </Splide>

        </Wrapper>

      </Title>
    </React.Fragment>
  )
}

const Title = styled.div`
      padding: 1em 2em;
`
const Wrapper = styled.div`
  padding: 1rem 0rem;
  background-color: transparent;
  h2{
    padding-bottom: .25em;
  }
`
const Card = styled.div`
  text-align:center;
  min-height:max-content;
  border-radius:10px;
  position:relative;
  overflow:hidden;
  p{
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
  top:0;
  border-radius:10px;
  z-index: 12;
  background: linear-gradient(to top, rgba(0, 0, 0, .10), transparent);
`

export default Veggie