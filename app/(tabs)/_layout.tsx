import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function _layout() {

  //Dummy check for authentication
  //In real app, replace this with actual authentication logic
  const isAuthenticated = false;

  if(!isAuthenticated) return <Redirect href="/signin" />
  return <Slot />
}