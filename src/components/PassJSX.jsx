import React from 'react'

function PassJSX({children, bgColor}) {
  return (
    <div style={{color:"blue", width:"400px", padding: "40px", borderRadius: "30px", margin: "20px", backgroundColor:bgColor}}>
        {children}
    </div>
  )
}

export default PassJSX