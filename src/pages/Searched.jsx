import React from 'react'
import { useParams } from 'react-router-dom'
import Category from '../components/Category'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {
  const keyword = useParams().keyword;
  const [searched, setSearched] = useState([]);
  const getSearched = async () =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${keyword}&number=9`);
    const json = await api.json();
    setSearched(json.results)
    console.log(searched);
  }

  useEffect(()=>{
    getSearched();
    console.log(searched)
  },[keyword])


  return (
    <>
        <Category/>
        <Search/>
        <Result>
            Showing result for : {keyword}
        </Result>
        <Grid>

            {searched.map((recipe)=>{
                return(
                        <Card key={recipe.id}>
                            <Link to={'/recipe/' + recipe.id}>
                                <img src={recipe.image}></img>
                                <h4>
                                    {recipe.title}
                                </h4>
                                <Gradient></Gradient>
                            </Link>
                        </Card>
                )
            })}

        </Grid>

    </>
  )

}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    /* grid-template-rows: 1fr 1fr 1fr; */
    max-width: .5vw;
    gap:3rem;
    padding: 10px 3rem;
`
const Result = styled.div`
    padding: 1rem;
`

const Card = styled.div`
    position:relative;
    text-align: center;
    img{
        width:100%;
        height:100%;
    }
    h4{
        position:absolute;
        bottom:12px;
        width:100%;
        text-align:center;
        color:white;
        z-index:10;
        font-size: 1rem;
    }
`
const Gradient = styled.div`
    background: linear-gradient(to bottom, transparent, #0000003f);
    width:100%;
    height: 100%;
    position:absolute;
    top:0px;
    z-index: 8;
`

export default Searched