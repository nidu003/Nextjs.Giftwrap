"use client";

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Perform form submission logic
    // 1. Send an API request to your backend
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      // 2. Handle successful submission
      // Show a success message or redirect to a confirmation page
      console.log('Successfully subscribed!');
    } catch (error) {
      // 3. Handle errors
      console.error('Error subscribing:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email-id"
        required
      />
      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </form>
  );
};

export default Newsletter;
