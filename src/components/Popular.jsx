import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {

  const [popular, setPopular] = useState( [] );

  useEffect( () => {
    getPopular();
    console.log('Me ejecuto sólo una vez')
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    setPopular(data.recipes);
  }


  return (
    <Wrapper>
      <h2>Our Popular Dishes:</h2>
      <Splide 
        options={ {
          rewind: true,
          perPage: 3,
          perMove: 1,
          updateOnMove: true,
          focus:'center'
        } 
      }>
        {
          popular.map((recipe) => {       
              return (
                <SplideSlide className='splidex'>
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
  )
}

/* Here we will create our styled components */
const Wrapper = styled.div`
  padding: 0rem 2rem;
  background-color: transparent;
`
const Card = styled.div`
  text-align:center;
  min-height:max-content;
  border-radius:10px;
  margin-left:20px;
  position:relative;
  overflow:hidden;
  p{
    position:absolute;
    bottom:10px;
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
  width:100%;
  height:100%;
  top:0;
  border-radius:10px;
  z-index: 12;
  background: linear-gradient(to top, rgba(0, 0, 0, .10), transparent);
`


export default Popular