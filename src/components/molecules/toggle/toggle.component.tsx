import React from 'react';
import { View } from 'react-native';
import BaseText from '../../atoms/base-text/base-text.component';
import BaseToggle from '../../atoms/base-toggle/base-toggle.component';
import ToggleProps from './toggle.props';

function Toggle({ 
  testId, 
  title, 
  description, 
  titleProps, 
  descriptionProps,
  ...toggleProps 
}: ToggleProps) {
  return (
    <View className="flex-row items-center justify-between py-4">
      <View className="flex-1 mr-4">
        <BaseText
          text={title}
          textProps={titleProps}
          className="text-toggle-title typo-size-text-md font-medium"
        />
        {description && (
          <BaseText
            text={description}
            textProps={descriptionProps}
            className="text-toggle-subtitle typo-size-text-sm mt-1"
          />
        )}
      </View>
      <BaseToggle
        testId={testId}
        {...toggleProps}
        trackColor={{
          false: toggleProps.disabled ? '#D1D5DB' : '#F3F4F6',
          true: toggleProps.disabled ? '#FEE8B6' : '#FCB614',
        }}
        thumbColor={
          toggleProps.disabled 
            ? '#9CA3AF' 
            : toggleProps.value 
              ? '#FFFFFF' 
              : '#FFFFFF'
        }
        ios_backgroundColor={toggleProps.disabled ? '#D1D5DB' : '#F3F4F6'}
      />
    </View>
  );
}

export default Toggle;