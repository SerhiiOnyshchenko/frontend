import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Appbar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';

export default function App() {
  return (
    <Container>
      <Appbar />
      <HomePage />
    </Container>
  );
}
