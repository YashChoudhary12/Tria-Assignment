import React, { useState } from 'react';

export default function AddContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return setError('Name is required');
    if (email && !/\S+@\S+\.\S+/.test(email)) return setError('Email is invalid');
    setError('');
    onAdd({ id: Date.now(), name, email, phone, favorite: false });
    setSuccess('Contact added!');
    setName(''); setEmail(''); setPhone('');
    setTimeout(() => setSuccess(''), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name *"
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm" />
      <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone"
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm" />
      <button type="submit" className="mt-2 px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
        Add Contact
      </button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">{success}</div>}
    </form>
  );
}
