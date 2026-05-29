import React, {useState} from 'react'

const { useState } = require("react")

const App = () =>{
               let [input,SetInput]=  useState("")
               let[data,SetInput]=     useState("")
    function fun1(e){
        // console.log(e.target.type);
        SetInput(e.target.value)
    }
    return{
        <div>
        <h2>(input)</h2>
        <input type="text" onChange=(fun1)></input>
        </div>
    }
}
export default App
