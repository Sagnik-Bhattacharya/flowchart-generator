'use client';
import React from 'react';
import useStore from '@/lib/store';

const shapes = [
  { type: 'square', label: 'Square' },
  { type: 'rectangle', label: 'Rectangle' },
  { type: 'circle', label: 'Circle' },
  { type: 'oval', label: 'Oval' },
  { type: 'rhombus', label: 'Rhombus' },
];

export default function Sidebar() {
  const addNode = useStore((s) => s.addNode);

  return (
    <div className="w-48 bg-gray-100 p-4 border-r">
      <h2 className="font-bold mb-4">Shapes</h2>
      {shapes.map(({ type, label }) => (
        <button
          key={type}
          className="block w-full mb-2 bg-blue-500 text-white py-1 rounded"
          onClick={() => addNode(type)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}