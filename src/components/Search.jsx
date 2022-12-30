import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

function Search() {
  const [keyword, setKeywork] = useState(['']);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/searched/' + keyword)
  }


  return (
    <>
        <FormStyle onSubmit={ handleSubmit }>
            <input placeholder='Look for your dessert' autoComplete='off' type="text" onChange={(e)=>{setKeywork(e.target.value)}} value={keyword} name="seahch" id="search" />
            <FaSearch></FaSearch>
        </FormStyle>
    </>
  )
}

const FormStyle = styled.form`
    max-width:50%;
    margin:0 auto;
    position:relative;
    input{
        width:100%;
        padding:.75rem 1.25rem;
        padding-left: 2.0rem;
        border:none;
        background:#0f1922;
        border-radius:12px;
        outline:none;
        color:white;
    }
    svg{
        position:absolute;
        left: 10px;
        top:50%;
        color:white;
        transform:translateY(-50%);
    }
    @media (max-width:765px) {
        margin-block: 1em;
    }
`

export default Search