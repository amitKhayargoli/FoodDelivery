import { images } from '@/constants';
import { TabBarIconProps } from '@/type';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabBarIcon = ({focused, icon, title}:TabBarIconProps) => {
  return (
    <View className='tab-icon'>
      <Image source={icon} className='size-7' resizeMode='contain' tintColor={focused? '#FE8C00':'#5D5F6D'}></Image>
      <Text>{title}</Text>
   
    </View>
  )

}

export default function _layout() {

  //Dummy check for authentication
  //In real app, replace this with actual authentication logic
  const isAuthenticated = false;

  if(!isAuthenticated) return <Redirect href="/signin" />
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon:({focused}) => <TabBarIcon title="Home" icon={images.home}  focused={focused} /> }} />
    </Tabs>
  )
}