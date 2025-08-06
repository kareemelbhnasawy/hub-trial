import { SwitchProps } from 'react-native';

interface ToggleProps extends Omit<SwitchProps, 'testID'> {
  testId: string;
  title: string;
  description?: string;
  titleProps?: any;
  descriptionProps?: any;
}

export default ToggleProps;