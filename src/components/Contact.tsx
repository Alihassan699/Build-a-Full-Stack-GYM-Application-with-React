import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      alert("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <section className='contact'>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div>
          <label>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/>
        </div>
        <div>
          <label>E-mail</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your E-mail'/>
        </div>
        <div>
          <label>Message</label>
          <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write your message here...' />
        </div>
        <button 
          type='submit' 
          disabled={loading}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}
        >
          {loading && <ClipLoader size={20} color='white' />}
          {!loading && "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
