import React from 'react';

export default function NotFound() {

  // does nothing but redirect back to homepage

  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return null;
}