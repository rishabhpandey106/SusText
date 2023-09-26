"use client"
import React from 'react'
import he from "he";

const Result = ({result}) => {
  const decodedResult = result ? he.decode(result) : '';

  const copyContent = () => {
      const textToCopy = decodedResult.trim();
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log('Text copied to clipboard!');
        })
        .catch((error) => {
          console.error('Unable to copy text: ', error);
          alert('Copy to clipboard failed. Please try again.');
        });
  };
  return (
    <>
    <div id="result" style={{ display: result ? 'flex' : 'none' , flexDirection : 'row' , justifyContent: 'space-between'}} >
      {result && <div dangerouslySetInnerHTML={{ __html: decodedResult }}/>}
      <div>
      {result && (
          <button id="copy" style={{ minWidth: '25px' , minHeight: '25px' }} onClick={copyContent}><img src="copy.png" alt="copy" /></button>
        )}
      </div>
      
      
    </div>
    </>
  )
}

export default Result