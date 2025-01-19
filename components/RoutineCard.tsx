import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import AppButton from './app_button'

function startRoutine(){}

const RoutineCard = () => {
  return (
    <View className=''>
      <Text className='text-3xl text-white font-bold p-4' style={{fontSize:25}}>Chest day</Text>
    
      
    <Text className='text-xl text-white px-4'>This is description</Text>

    <View className='justify-center align-middle items-center p-4'>
    <TouchableOpacity onPress={startRoutine} 
    activeOpacity={0.7} 
    style={{ backgroundColor: "#007AFF", borderRadius: 10 }}>
      <Text className="p-4 text-white text-xl">Start Routine</Text>
    </TouchableOpacity>
    </View>

    </View>
  )
}

export default RoutineCard