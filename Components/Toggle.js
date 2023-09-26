"use client"
import React, { useState } from 'react'

const Toggle = ({ setisEncrypting, isEncrypting }) => {

  const handleEncrypt = ()=> {
    setisEncrypting(true);
  };

  const handleDecrypt = ()=> {
    setisEncrypting(false);
  };

  return (
    <>
    <div id="endec-div">
            <h3 id="enc-btn" className={isEncrypting?"active":""} onClick={handleEncrypt}><span><img src="khulatala.png" alt=""/></span> Encrypt Text</h3>
            <h3 id="dec-btn" className={isEncrypting?"":"active"} onClick={handleDecrypt}><span><img src="tala.png" alt=""/></span> Decrypt Emojis</h3>
        </div>
    </>
  )
}

export default Toggle