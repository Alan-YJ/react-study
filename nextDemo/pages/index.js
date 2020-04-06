import React,{ useState } from 'react'


function App(){
  const [color , setColor] = useState('black') 
  return(
    <div>
      <button onClick={()=>{setColor('red')}}>red</button>
      <button onClick={()=>{setColor('blue')}}>blue</button>
      <div className='text'>class text</div>
      <style jsx>
        {`
          div{color:red;}
          .text{
            color:${color}
          }
        `}
      </style>
    </div>
  )
}

export default App