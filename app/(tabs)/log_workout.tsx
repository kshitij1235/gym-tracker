import { View, Text, TextInput , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WorkoutDropDown from '@/components/workoutDropDown'

const log_workout = () => {
  return (
    <SafeAreaView className='h-full' style={{backgroundColor : "#181818"}}>
       <View className='' style={{backgroundColor : "#303030"}}>
         <Text className='text-white text-center p-5 text-2xl'>workout log</Text>
       </View>

      <View className="p-4">
        <TextInput
          className="rounded-xl px-4 text-gray-500"
          placeholder="Search"
          placeholderTextColor="white"
          style={{ backgroundColor: '#303030', color: 'white' }}
        />
      </View>

      <WorkoutDropDown exerciseTitle="Bench Press" />
      <WorkoutDropDown exerciseTitle="Deadlift" />
      <WorkoutDropDown exerciseTitle="Squats" />



    </SafeAreaView>
  )
}

export default log_workout