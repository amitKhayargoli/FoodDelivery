import { Slot } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'

export default function _layout() {
  return (
    <KeyboardAvoidingView>
      <Text>Auth Layout</Text>
      <Slot/>
    </KeyboardAvoidingView>
  )
}