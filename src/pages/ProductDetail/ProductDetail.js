import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/header/Header';
export default function ProductDetail() {
    const {id}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      fetchData();
    },[])
    const url="https://66a07af87053166bcabb8822.mockapi.io/student"
    const fetchData =()=>{
      axios.get(url+"/"+id)
      .then(function(res){
          setData(res.data)
      })
      .catch(function(error){
        console.log(error)
      })
    }
  return (
    <div>
        <Header/>
      <h1>Product detail: {id}</h1>
      <p>name: {data.name}</p>
    </div>
  )
}