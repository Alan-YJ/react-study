import React, { useState, useEffect, useRef } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

function Content(props){
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer:renderer,
        gfm:true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
    })
    const contentRef = useRef(null)
    let html = marked(props.content) 
    const [content,setContent] = useState(html)
    useEffect(()=>{
        setContent(marked(props.content))
    })
    useEffect(()=>{
        if(props.scrollHeight){
            console.info(props.scrollHeight)
            contentRef.current.scroll({
                top:props.scrollHeight,
                behavior:'smooth'
            })
        }
    })
    return(
        <div ref={contentRef} dangerouslySetInnerHTML={{__html:content}} className='content-markdown'></div>
    )
}

export default Content
