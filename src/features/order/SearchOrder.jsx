import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus:w-72 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm 
         placeholder:text-stone-400 sm:w-64 transition-all duration:300 focus:ring 
         focus:opcity-50 focus:outline-none focus:ring-yellow-500"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
