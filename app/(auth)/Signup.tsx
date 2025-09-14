import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
            <Button title='Sign In' onPress={()=>router.push("/signup")} />
    </View>
  )
}

export default Signup