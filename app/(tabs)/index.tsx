import WorkoutDropDown from "@/components/workoutDropDown";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView 
      className="h-full" 
      style={{ backgroundColor: "#181818", paddingTop: StatusBar.currentHeight }}
    >      
      <StatusBar barStyle="light-content" backgroundColor="#181818" />

      <View style={{ backgroundColor: "#303030" }}>
        <Text className="text-white text-center p-5 text-2xl">Home</Text>
      </View>    

    <Text className="text-white font-bold text-2xl p-4">Dashboard</Text>

    <View className="m-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
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

    </View>


    <Text className="text-white font-bold text-2xl p-4">Recent Workout</Text>

    <ScrollView>
      <WorkoutDropDown exerciseTitle="benchpress"/>
      <WorkoutDropDown exerciseTitle="benchpress"/>
      <WorkoutDropDown exerciseTitle="benchpress"/>
      <WorkoutDropDown exerciseTitle="benchpress"/>
      <WorkoutDropDown exerciseTitle="benchpress"/>

    </ScrollView>


    </SafeAreaView>
  );
}
