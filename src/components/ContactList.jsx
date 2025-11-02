import React from 'react';
import ContactCard from './ContactCard';

export default function ContactList({ contacts, onDelete, onToggleFavorite }) {
  if (contacts.length === 0) {
    return <div className="text-center text-slate-400 mt-10 text-lg">No contacts found 😢</div>;
  }

  return (
    <div className="grid gap-4">
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
