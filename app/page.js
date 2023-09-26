"use client"
import Decryption from '@/Components/Decryption'
import Encryption from '@/Components/Encryption'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Result from '@/Components/Result'
import Toggle from '@/Components/Toggle'
import React, { useState } from 'react'

const page = () => {
  const [isEncrypting, setisEncrypting] = useState(true);
  const [encryptedResult, setencryptedResult] = useState('');
  const [decryptedResult, setdecryptedResult] = useState('');
  // const [arrow, setarrow] = useState(false);
  const handleEncryption =(result) => {
    console.log("page",result);
    setencryptedResult(result);
  };

  const handleDecryption =(result) => {
    console.log("page2",result);
    setdecryptedResult(result);
  };

  return (
    <>
    <div id="main">
      <Header isToggled={isEncrypting} />
      <Toggle isEncrypting={isEncrypting} setisEncrypting={setisEncrypting} />
      {
        isEncrypting ? (<Encryption onEncrypt={handleEncryption}/>) : (<Decryption onDecrypt={handleDecryption}/>)
      }
      {
        isEncrypting ? (<Result result={encryptedResult}/>) : (<Result result={decryptedResult} />)
      }
    </div>
    <Footer/>
    </>
  )
}

export default page