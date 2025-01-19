import { View, Text } from 'react-native'
import React from 'react'


type props = {
    title : string
}
const RecentWorkoutCard = ({title}:props) => {
  return (
    <View >
      <Text className='text-white text-2xl'>{title}</Text>
    </View>
  )
}

export default RecentWorkoutCard