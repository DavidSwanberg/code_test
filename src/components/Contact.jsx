import React, { useState } from 'react';

const Contact = () => {
    const [input, setInput] = useState({ name: "", email: "", message:"" });

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

      const validateEmail =(email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submission', input);
         validateEmail(input.email) === true ? alert('submission successful') : alert('invalid email');
         setInput({ name: "", email: "", message:"" })
      };

    return(
        <div>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
        <div className="input">
        <label>name</label>
        <input
        value={input.name}
        name="name"
        onChange={handleChange}
        />
        </div>
        <div className="input">
        <label>email</label>
        <input
        value={input.email}
        name="email"
        onChange={handleChange}
        />
        </div>
        <div className="input">
        <label>message</label>
        <input
        value={input.message}
        name="message"
        onChange={handleChange}
        />
        </div>
        <button type="submit">Submit</button>

    </form>
        </div>
    )
}

export default Contact;