import React from 'react'

function Result({secretNum, term}){
    let result;
    if(term){
    if(term>secretNum){
        result=' you guessed:higher'
    }
    else if(term<secretNum){
        result=' you guessed:lower'
     }

     else if(term ==secretNum){
        result=" you guessed:correct";
     }
     else{
        result="enter vaild input"
     }
  return (
    <h3> {result}</h3>
  )}
}

export default Result