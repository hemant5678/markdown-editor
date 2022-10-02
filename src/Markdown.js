import React, { useState } from 'react'
import "./Markdown.css"
import ReactMarkdown from "react-markdown"

const Markdown = () => {
    const [markdown, setMarkDown] = useState("Welcom To MarkDown")
  return (
    <>
    <div className='centre-div'>

        <div className='left-div'>
            <div className='left-text-heading'><h4 className='H4'>MARKDOWN</h4></div>
            <div className='left-text'>
                <textarea className='text-area'   onChange={(e) => setMarkDown(e.target.value)}></textarea>
            </div>
        </div>


        <div className='right-div'>
             <div className='right-text-heading'><h4 className='H4'>PREVIEW</h4></div>
            <div className='right-text'> 
                  <div className='show-text'><ReactMarkdown>{markdown}</ReactMarkdown></div>
            </div>
        </div>

    </div>

    </>
  )
}

export default Markdown;