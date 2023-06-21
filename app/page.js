'use client'
import React from 'react';
import FetchMemes from './fetch';
import Search from './memeComponents/search'
import Header from './memeComponents/header'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Header />
      <FetchMemes />
      
      <Search />
    </main>
  );
}
