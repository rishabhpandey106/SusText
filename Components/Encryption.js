"use client"
import React , {useState} from 'react'

const Encryption = ({onEncrypt}) => {
  const [password, setpassword] = useState('');
  const [input, setinput] = useState('');
  const [clutter, setclutter] = useState('');

  const handleEncrypt = ()=> {
    const pass = password;
    const text = input;
    console.log(pass , input , clutter);
    if(!pass || !text)
    {
      alert('Please enter a password and input text');
      return;
    }

    const emojiArray = text.split('').map((char) => `&#128${char.charCodeAt()} `);
    const emojiClutter = emojiArray.join('');
    console.log("encryption",emojiClutter);
    setclutter(emojiClutter);

    const dataArr = JSON.parse(localStorage.getItem('data1')) || [];
    dataArr.push({ pass, input: text, clutter: emojiClutter });
    localStorage.setItem('data1', JSON.stringify(dataArr));

    onEncrypt(emojiClutter);
  };

  return (
    <>
    <div id="encryption">
            <h5>1. Type a message</h5>
            <textarea placeholder="Encrypt Your Message" value={input} onChange={(e) => setinput(e.target.value)} name="textmsg" id="textmsg" cols="30" rows="10"></textarea>
            <h5>2. Set a password</h5>
            <input placeholder="Remember Your Password" value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="password" id="password"/>
            <h5>3. Encrypt message</h5>
            <button id="encrypt-btn" onClick={handleEncrypt}><span><img src="./tala.png" alt=""/></span>Encrypt Text</button>
        </div>
    </>
  )
}

export default Encryption