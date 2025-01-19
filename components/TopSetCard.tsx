import { View, Text } from 'react-native'
import React from 'react'
const TopSetCard = () => {
  return (
    <>

      {/* Header */}
      <View className="bg-blue-500 px-4 py-2">
        <Text className="text-white font-semibold">Top sets</Text>
      </View>

      {/* Table Header */}
      <View className="flex-row bg-gray-700 px-4 py-2">
        <Text className="text-gray-300 font-medium flex-1">Workout</Text>
        <Text className="text-gray-300 font-medium flex-1 text-center">Weight</Text>
        <Text className="text-gray-300 font-medium flex-1 text-right">Reps</Text>
      </View>

      {/* Table Row */}
      <View className="flex-row px-4 py-3">
        <Text className="text-white flex-1">Dumbbell Press</Text>
        <Text className="text-white flex-1 text-center">9kg</Text>
        <Text className="text-white flex-1 text-right">5</Text>
      </View>

      <View className="flex-row px-4 py-3">
        <Text className="text-white flex-1">Dumbbell Press</Text>
        <Text className="text-white flex-1 text-center">9kg</Text>
        <Text className="text-white flex-1 text-right">5</Text>
      </View>
      <View className="flex-row px-4 py-3">
        <Text className="text-white flex-1">Dumbbell Press</Text>
        <Text className="text-white flex-1 text-center">9kg</Text>
        <Text className="text-white flex-1 text-right">5</Text>
      </View>

    </>
  )
}

export default TopSetCard