import React, { useState, useEffect, useMemo } from 'react';
import { initialContacts } from './data/contacts';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || initialContacts;
  });
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => setContacts(prev => [contact, ...prev]);
  const deleteContact = id => setContacts(prev => prev.filter(c => c.id !== id));
  const toggleFavorite = id => setContacts(prev => prev.map(c => c.id === id ? {...c, favorite: !c.favorite} : c));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(c => c.name.toLowerCase().includes(q));
  }, [contacts, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-sky-700">Tria — Contact List</h1>
            <p className="text-slate-500 mt-1">Search, view, and manage your contacts</p>
          </div>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search contacts by name..."
            className="w-full sm:w-96 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
          />
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white p-5 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Add Contact</h2>
            <AddContactForm onAdd={addContact} />
          </div>

          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Contacts ({filtered.length})</h2>
              <span className="text-sm text-slate-500">Showing results for "{query || 'all'}"</span>
            </div>
            <ContactList contacts={filtered} onDelete={deleteContact} onToggleFavorite={toggleFavorite} />
          </div>
        </section>
      </div>
    </div>
  );
}
