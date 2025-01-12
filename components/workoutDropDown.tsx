import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AppButton from './app_button';
import CheckBox from 'react-native-check-box';


type Params = {
  exerciseTitle: string;  
};

const WorkoutDropDown = ({ exerciseTitle }: Params) => {  
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Initialize sets with isChecked property and some weights
  const [sets, setSets] = useState([
    { id: 1, reps: 0, weight: 10, isChecked: false }, 
  ]);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const addSet = () => {
    const newSet = { 
      id: sets.length + 1, 
      reps: 0, 
      weight: 10, // Add weight value for new set
      isChecked: false // Initial checkbox state
    }; 
    setSets([...sets, newSet]);
  };

  const handleCheckboxToggle = (setId: number) => {
    setSets(sets.map(set => 
      set.id === setId ? { ...set, isChecked: !set.isChecked } : set
    ));
  };

  return (
    <View style={{ paddingBottom: 10, paddingRight: 10, paddingLeft: 10 }}>
      {/* Dropdown Header */}
      <TouchableOpacity 
        style={{ backgroundColor: "#303030", borderRadius: 12 }}
        onPress={toggleDropdown}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12 }}>
          {/* Image on the left */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://via.placeholder.com/56' }} // Replace with your image URL
              style={{ width: 56, height: 56, borderRadius: 8, marginRight: 10 }}
            />
            
            {/* Exercise Title */}
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              {exerciseTitle}  {/* Corrected to use exerciseTitle */}
            </Text>
          </View>

          {/* Arrow Indicator */}
          <Text style={{ color: 'white', fontSize: 18 }}>
            {isExpanded ? '▲' : '▼'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Expanded content */}
      {isExpanded && (


        <View style={{ padding: 10, backgroundColor: "#404040", borderRadius: 10, marginTop: 5 }}>
          <Text className='text-2xl text-white p-2'>Sets </Text>


              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Text style={{ color: 'white', marginRight: 10, fontSize: 16 }}>
                status
              </Text>
              <Text style={{ color: 'white', marginRight: 10, fontSize: 16 }}>
                set
              </Text>

              <Text style={{ color: 'white', fontSize: 16 }}>
                weight kg/lbs
              </Text>
            </View>


          {sets.map((set) => (
            <View key={set.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              {/* Checkbox on the left */}
              <CheckBox
                value={set.isChecked}
                onValueChange={() => handleCheckboxToggle(set.id)} 
                style={{ color: 'white', marginRight: 10 }}
              />
              
              {/* Set number in the middle */}
              <Text style={{ color: 'white', marginRight: 10, fontSize: 16 }}>
                {set.id}
              </Text>
              
              {/* Weight on the right */}
              <Text style={{ color: 'white', fontSize: 16 }}>
                {set.weight} kg
              </Text>
            </View>
          ))}

          <AppButton 
            title="Add Set" 
            onPress={addSet} 
          />
        </View>


      )}
    </View>
  );
};

export default WorkoutDropDown;
