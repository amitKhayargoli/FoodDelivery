
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const Signin = () => {

  const[isSubmitting,setIsSubmitting] = useState(false)
  const[form,setForm] = useState({email:'',password:''})

  const submit = async()=>{
    if(!form.email || !form.password) Alert.alert('Error','Please fill all the fields')

    setIsSubmitting(true)

    try{
      //Call Apprwite Sign In API

      Alert.alert('Success','You are signed in')
      setForm({email:'',password:''})
    }
    catch(error){
      Alert.alert('Error','Something went wrong')
    }
    finally{
      setIsSubmitting(false)
    }
  }

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
      placeholder='Enter your email'
      value={''}
      onChangeText={(text)=>{}}
      label='Email'
      keyboardType='email-address'
      />

            <CustomInput
      placeholder='Enter your password'
      value={''}
      onChangeText={(text)=>{}}
      label='Password'
      secureTextEntry={true}
      />
      <CustomButton title='Sign In'/>
      <View className='flex justify-center mt-5 flex-row gap-2'>
        <Text className='base-regular text-gray-100'>Don't have an account?</Text>
        <Link href="/signup" className='base-bold text-primary'>Sign Up</Link>
      </View>
    </View>
  )
}

export default Signin