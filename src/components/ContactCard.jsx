import React from 'react';

export default function ContactCard({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center font-bold text-lg text-sky-700">
          {contact.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold">{contact.name}</div>
          <div className="text-sm text-slate-500">{contact.email}</div>
          <div className="text-sm text-slate-500">{contact.phone}</div>
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={() => onToggleFavorite(contact.id)} className="text-yellow-400 hover:text-yellow-500 text-xl">
          {contact.favorite ? '★' : '☆'}
        </button>
        <button onClick={() => onDelete(contact.id)} className="text-red-400 hover:text-red-600 text-xl">
          🗑️
        </button>
      </div>
    </div>
  );
}
