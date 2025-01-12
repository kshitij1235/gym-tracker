import { View, Text, SafeAreaView, StatusBar } from "react-native";

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


    



    </SafeAreaView>
  );
}
