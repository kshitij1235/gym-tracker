import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import AppButton from './app_button';

const WorkoutDropDown = ({ exerciseTitle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sets, setSets] = useState([
    { id: 1, reps: 10 },
    { id: 2, reps: 8 },
    { id: 3, reps: 6 },
  ]);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const addSet = () => {
    const newSet = { id: sets.length + 1, reps: 0 }; // Default reps as 0 for the new set
    setSets([...sets, newSet]);
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
              {exerciseTitle}
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
          {sets.map((set) => (
            <Text 
              key={set.id} 
              style={{ color: 'white', marginBottom: 5, fontSize: 16 }}
            >
              Set {set.id}: {set.reps} reps
            </Text>
          ))}
          <AppButton 
            title="Add Set" 
            onPress={addSet} 
            style={{
              backgroundColor: '#007BFF',
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 10,
              alignItems: 'center',
            }}
            textStyle={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default WorkoutDropDown;
