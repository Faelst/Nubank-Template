import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/Pages/Main/index'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#80259c' barStyle='light-content' />
      <Main/>
    </>
  );
}