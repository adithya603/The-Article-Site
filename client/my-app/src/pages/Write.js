import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import moment from 'moment';

//npm i react-quill for text editor

function Write(){

  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "")
  const [img, setImg] = useState(null)
  const [cat, setCat] = useState(state?.cat || "")

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{
      state ? await axios.put(`posts/${state.id}`, {
        title, desc, cat, 
      })
      : await axios.post(`/posts/`, {
        title, desc, cat, img: "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' value={title} placeholder='title' onChange={e=> setTitle(e.target.value)} />
        <div className='editorContainer'>
          <ReactQuill className='editor' theme='snow' value={desc} onChange={setDesc} />
        </div>
      </div>

      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <div className='options'>
            <span>
              <b>Status: </b> Draft
            </span>
            <br></br>
            <span>
              <b>Visibility:</b> Public
            </span>
            
          </div>
          <input style={{display:"none"}} type='file' id='file' name='' onChange={e=> setImg(e.target.files[0])}/>
          <label className='file' htmlFor='file'>Upload image</label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'><input type='radio' checked={cat === "art"} name='cat' value="art" id="art" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='art'>Art</label></div>
          <div className='cat'><input type='radio' checked={cat === "science"} name='cat' value="science" id="science" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='science'>Science</label></div>
          <div className='cat'><input type='radio' checked={cat === "technology"} name='cat' value="technology" id="technology" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='technology'>Technology</label></div>
          <div className='cat'><input type='radio' checked={cat === "cinema"} name='cat' value="cinema" id="cinema" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='cinema'>Cinema</label></div>
          <div className='cat'><input type='radio' checked={cat === "design"} name='cat' value="design" id="design" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='design'>Design</label></div>
          <div className='cat'><input type='radio' checked={cat === "food"} name='cat' value="food" id="food" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor='food'>Food</label></div>
        </div>
        
      </div>
    </div>
  )
}

export default Write;