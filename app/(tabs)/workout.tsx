import { Text, View ,Alert } from 'react-native'
import React, { PureComponent } from 'react'
import AppButton from '@/components/app_button'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoutineCard from '@/components/RoutineCard'
export default class workout extends PureComponent {
  render() {
    return (

    
        <SafeAreaView className='h-full' style={{backgroundColor : "#181818"}}>
      <View className='' style={{backgroundColor : "#303030"}}>
        <Text className='text-white text-center p-5 text-2xl'>workout</Text>
      </View>

            <Text className='text-white text-2xl p-4 font-bold'>
                Quick start 
            </Text>
            <View className='px-4'>

            <AppButton 
                title="+ Start workout Routine" 
                onPress={() => Alert.alert('Button Pressed!')} 
                className="w-3/4 bg-blue-600 rounded-xl p-3"
                textClassName="text-white text-center text-lg font-bold"
                />
            </View>
            <Text className='text-white text-2xl p-4 font-bold'>
                Create Routine 
            </Text>
            <View className='px-4'>
            <AppButton 
                title="+ Add New Routine" 
                onPress={() => Alert.alert('Button Pressed!')} 
                className="w-3/4 bg-blue-600 rounded-xl p-3"
                textClassName="text-white text-center text-lg font-bold"
                />          
            </View>
      
      <Text className='text-3xl text-white font-bold p-4'>Saved Routine</Text>
      
      <View className='m-4'  style={{backgroundColor : "#303030",  borderRadius:10}}>
        <RoutineCard/>
      </View>

    </SafeAreaView>
    )
  }
}