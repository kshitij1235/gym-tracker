import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type AppButtonProps = {
  title: string; // Button text
  onPress: () => void; // Callback for button press
  className?: string; // Tailwind classes for button container
  textClassName?: string; // Tailwind classes for text
};

const AppButton: React.FC<AppButtonProps> = ({ 
  title, 
  onPress, 
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{backgroundColor : "#303030",  borderRadius:10}}>
      <Text className="p-4 text-white text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
