import RecentWorkoutCard from "@/components/RecentWorkoutCard";
import TopSetCard from "@/components/TopSetCard";
import WorkoutDropDown from "@/components/workoutDropDown";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView 
      className="h-full" 
      style={{ backgroundColor: "#181818", paddingTop: StatusBar.currentHeight }}
    >      
      <StatusBar barStyle="light-content" backgroundColor="#181818" />

      {/* header */}
      <View style={{ backgroundColor: "#303030" }}>
        <Text className="text-white text-center p-5 text-2xl">Home</Text>
      </View>    

    <ScrollView>
    
    {/* dash board  */}
    <Text className="text-white font-bold text-2xl p-4">Dashboard</Text>  
    <View className="m-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <TopSetCard/>
    </View>


    {/* recent workout  */}
    <Text className="text-white font-bold text-2xl p-4">Recent Workout</Text>
    {/* <RecentWorkoutCard title="bench_press"/> */}
    </ScrollView>


    </SafeAreaView>
  );
}