import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import AppButton from './app_button';

type Params = {
  exerciseTitle: string
}

const WorkoutDropDown = ({ exerciseTitle }: Params) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [sets, setSets] = useState([
    { id: 1, reps: 0, weight: 10, tags: 'Strength', isChecked: false },
  ])

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded)
  }

  const addSet = () => {
    const newSet = {
      id: sets.length + 1,
      reps: 0,
      weight: 10,
      tags: '--',
      isChecked: false,
    }
    setSets([...sets, newSet])
  }

  const handleCheckboxToggle = (setId: number) => {
    setSets(
      sets.map((set) =>
        set.id === setId ? { ...set, isChecked: !set.isChecked } : set
      )
    )
  }

  return (
    <View style={styles.container}>
    {/* Dropdown Header */}
    <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
      <View style={styles.headerContent}>
        {/* Image on the left */}
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/6d/91/0c/6d910c7fc963ad298b0d8c437b56e155.jpg' }} // Replace with your image URL
            style={styles.image}
          />
          <Text style={styles.title}>{exerciseTitle}</Text>
        </View>
        {/* Arrow Indicator */}
        <Text style={styles.arrow}>{isExpanded ? '▲' : '▼'}</Text>
      </View>
    </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View className="px-4 py-2">
          {/* Table Header */}
          <View className="flex-row items-center justify-between border-b border-[#1a1a1a] py-3">
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              set
            </Text>
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              previous
            </Text>
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              weight
            </Text>
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              reps
            </Text>
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              tag
            </Text>
            <Text className="flex-1 text-center text-xs uppercase text-gray-500">
              Done
            </Text>
          </View>

          {/* Table Rows */}
          {sets.map((set) => (
            <View
              key={set.id}
              className="flex-row items-center justify-between border-b border-[#1a1a1a] py-3"
            >
              <Text className="flex-1 text-center text-sm text-gray-300">
                {set.id}
              </Text>
              <Text className="flex-1 text-center text-sm text-gray-500">--</Text>
              <Text className="flex-1 text-center text-sm text-gray-300">
                {set.weight}
              </Text>
              <Text className="flex-1 text-center text-sm text-gray-300">
                {set.reps}
              </Text>
              <Text className="flex-1 text-center text-sm text-gray-300">
                {set.tags}
              </Text>
              <View className="flex-1 items-center">
                <CheckBox
                  isChecked={set.isChecked}
                  onClick={() => handleCheckboxToggle(set.id)}
                  checkBoxColor="#3B82F6" // Blue-500 color
                  style={{ width: 20, height: 20 , marginLeft:20}}
                />
              </View>
            </View>
          ))}

          {/* Add Set Button */}
          <View className="mt-3">
            <AppButton 
              title="Add Set" 
              onPress={addSet}
              className="bg-[#1a1a1a] py-3 rounded-lg"
              textClassName="text-center text-sm font-medium text-gray-400"
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight : 10,
    paddingLeft:10,
    paddingBottom : 4,
    borderRadius:16,
    backgroundColor: '#121212', // Dark theme background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 16,
  },
  header: {
    backgroundColor: '#1F1F1F', // Darker background for header
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    color: '#E0E0E0', // Lighter text for readability
    fontSize: 18,
    fontWeight: '600',
  },
  arrow: {
    color: '#007AFF', // iOS blue color
    fontSize: 18,
  },
  dropdown: {
    padding: 10,
    borderRadius:16,
    backgroundColor: '#1F1F1F', // Darker background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tableHeader: {
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333333', // Slightly lighter dark background
    padding: 10,
    borderRadius: 8,
  },
  tableHeaderText: {
    fontSize: 14,
    color: '#B0B0B0', // Light text for dark background
    fontWeight: '600',
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444444', // Darker border for rows
  },
  tableRowText: {
    fontSize: 16,
    color: '#E0E0E0', 
    textAlign: 'center',
    paddingLeft:110,
    flex: 1,
  },
  checkbox: {
    marginRight: 10,         
    alignItems: 'center',    
  },
});

export default WorkoutDropDown;