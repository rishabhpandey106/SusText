"use client"
import React from 'react'
import he from "he";

const Result = ({result}) => {
  const decodedResult = result ? he.decode(result) : '';

  return (
    <>
    <div id="result" style={{ display: result ? 'block' : 'none' }} >
      {result && <div dangerouslySetInnerHTML={{ __html: decodedResult }}/>}
    </div>
    </>
  )
}

export default Result