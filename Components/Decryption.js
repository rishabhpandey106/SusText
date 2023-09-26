"use client"
import React, { useState } from 'react'

const Decryption = ({onDecrypt}) => {

  const [password, setpassword] = useState('');
  const [input, setinput] = useState('');
  const [decryptText, setdecryptText] = useState('');

  const handleDecrypt = ()=> {
    const pass = password;
    const emoji = input;
    console.log(pass , emoji);
    if (!pass || !emoji) {
      alert('Please enter the password and the encrypted message.');
      return;
    }

    const emojiArray = emoji.split(' ');
    let encryptedMessage = '';
    emojiArray.forEach((emoji) => {
      const charCode = emoji.codePointAt(0);
      encryptedMessage += `&#${charCode} `;
    });
    let output='';
    const dataArr = JSON.parse(localStorage.getItem('data1')) || [];
    const matchingEntry = dataArr.find(
      (entry) => {
        output = entry;
        return entry.pass === pass && entry.clutter === encryptedMessage
      }
    );

    if (matchingEntry) {
      // const emojiArray = matchingEntry.clutter.split(' ');
      // let decrypted = '';
      // emojiArray.forEach((emoji) => {
      //   const charCode = parseInt(emoji.substring(2, emoji.length - 1), 10);
      //   decrypted += String.fromCodePoint(charCode);
      // });
      setdecryptText(output.input);
      onDecrypt(output.input);
    } else {
      alert('Password or encrypted message does not match.');
    }
  }

  const clearDecryptionResult = () => {
    setdecryptText(''); 
  };

  return (
    <>
    <div onClick={clearDecryptionResult} id="decryption">
        <h5>1. Paste encrypted message</h5>
        <textarea placeholder="Decrypt Your Message" value={input}
          onChange={(e) => setinput(e.target.value)} name="emojimsg" id="emojimsg" cols="30" rows="10"></textarea>
        <h5>2. Type a password</h5>
        <input placeholder="Remember Your Password" value={password}
          onChange={(e) => setpassword(e.target.value)} type="password" name="password" id="finalpassword"/>
        <h5>3. Decrypt Emojis</h5>
        <button id="decrypt-btn" onClick={handleDecrypt}><span><img src="./khulatala.png" alt=""/></span>Decrypt Text</button>
    </div>
    </>
  )
}

export default Decryption