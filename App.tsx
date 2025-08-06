import './src/style/global.css';
import './src/localization';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import BaseText from './src/components/atoms/base-text/base-text.component';
import { useTranslate } from './src/hooks/useTranslate';

function App() {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
  return (
    <View className="mt-96 bg-white dark:bg-black">
      <BaseText
        text="common.welcome"
        textProps={{ name: 'hamada' }}
        className="text-alpha-green-50 dark:text-primary-25 paragraph-spacing-text-xl"
      >
        {' '}
        <BaseText
          text="common.welcome common.obj.obj1"
          textProps={{ name: 'hamada' }}
          className="underline"
        >
          {' '}
          salwa
        </BaseText>
      </BaseText>
      <Pressable
        onPress={toggleTheme}
        className="mt-3 py-2 bg-primary-600 dark:bg-gray-700 rounded "
      >
        <Text className="text-light-text dark:text-white line-heights-text-xs">Toggle Theme</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage(locale === 'ar' ? 'en' : 'ar')}
        className="mt-4 ml-2 mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <Text className="text-light-text dark:text-white text-60 font-regular">
          Toggle Lang
        </Text>
      </Pressable>
    </View>
  );
}

export default App;
