import React from 'react';
import { Switch } from 'react-native';
import ToggleProps from './base-toggle.props';

function Toggle({ testId, ...toggleProps }: ToggleProps) {
  return <Switch testID={`${testId}-toggle`} {...toggleProps} />;
}

export default Toggle;
