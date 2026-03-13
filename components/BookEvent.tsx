'use client';
import React, { useState } from 'react'

const BookEvent = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);   

    // A simple form submission handler that simulates a booking process
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior

        setTimeout(()=>{
            setSubmitted(true);
        }, 1000);
    }


  return (
    <div id='book-event'>
      {submitted ? (
        <p className='text-sm'>Thank you for booking!</p>
      ) : ( 
        // Renders the form only if the booking has not been submitted
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Address</label>
                <input type="email" id='email' value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter your email' /> 
            </div>
            <button type='submit'className='button-submit'>Submit</button>
        </form>
      )}
    </div>
  )
}

export default BookEvent
