import { TextProps } from 'react-native';

interface BaseTextProps extends TextProps {
  text: string;
  isTranslated?: boolean;
  textProps?: any;
}

export default BaseTextProps;
