import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'

export default function _layout() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{height:Dimensions.get('screen').height/2.25}}>
          <ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg' resizeMode='stretch'/>
       
        </View>
      </ScrollView>
      <Text>Auth Layout</Text>
      <Slot/>
    </KeyboardAvoidingView>
  )
}