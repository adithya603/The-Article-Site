import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import moment from 'moment';

//npm i react-quill for text editor

function Write() {

  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "")
  const [shortDesc, setShortDesc] = useState("")
  const [img, setImg] = useState(state?.img || "")
  const [cat, setCat] = useState(state?.cat || "")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      state ? await axios.put(`https://the-article-site.vercel.app/api/posts/${state.id}`, {
        title, img, shortDesc, desc, cat
      })
        : await axios.post(`https://the-article-site.vercel.app/api/posts/`, {
          title, img, shortDesc, desc, cat, 
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      navigate("/home")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className='content'>
        
        <input type='text' value={title} placeholder='Title of the Article' onChange={e => setTitle(e.target.value)} />

        <input type='text' value={img} placeholder='Image URL' onChange={e => setImg(e.target.value)} />

        <input className='about-article' type='text' value={shortDesc} placeholder='About the Article' onChange={e => setShortDesc(e.target.value)} />

        <div className='editorContainer'>
          <ReactQuill className='editor' theme='snow' value={desc} onChange={setDesc} />
        </div>
      </div>

      <div className='menu'>

        <div className='item'>
          <h1>Category: </h1>
          <div className='cat'><input type='radio' checked={cat === "life"} name='cat' value="life" id="life" onChange={e => setCat(e.target.value)} />
            <label htmlFor='art'>Life</label></div>
          <div className='cat'><input type='radio' checked={cat === "sports"} name='cat' value="sports" id="sports" onChange={e => setCat(e.target.value)} />
            <label htmlFor='science'>Sports</label></div>
          <div className='cat'><input type='radio' checked={cat === "cinema"} name='cat' value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
            <label htmlFor='cinema'>Cinema</label></div>
          <div className='cat'><input type='radio' checked={cat === "literature"} name='cat' value="literature" id="literature" onChange={e => setCat(e.target.value)} />
            <label htmlFor='technology'>Literature</label></div>

          <button onClick={handleSubmit}>Publish</button>

        </div>
      </div>

    </div>
  )
}

export default Write;