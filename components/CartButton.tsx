import { images } from '@/constants';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
    const totalItems = 10;
  return (
     <TouchableOpacity
      onPress={() => {}}
      className="relative w-10 h-10 items-center justify-center rounded-full bg-gray-800"
    >
      <Image
        source={images.bag}
        className="w-5 h-5"
        resizeMode="contain"
      />

      {totalItems > 0 && (
        <View className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full items-center justify-center">
          <Text className="text-xs font-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton