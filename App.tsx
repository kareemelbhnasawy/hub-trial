import './src/style/global.css';
import './src/localization';
import { Pressable, Text, View, ScrollView } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import BaseText from './src/components/atoms/base-text/base-text.component';
import { useTranslate } from './src/hooks/useTranslate';
import Toggle from './src/components/molecules/toggle';
import { useState } from 'react';

function App() {
  const { toggleTheme } = useTheme();
  const { changeLanguage, locale } = useTranslate();
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: false,
    rememberMe: false,
    autoSave: true,
    disabled: false,
  });

  const handleToggleChange = (key: string, value: boolean) => {
    setToggleStates(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      <View className="mt-16 px-6">
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

        {/* Toggle Components Demo */}
        <View className="mt-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <BaseText
            text="Toggle Components Demo"
            isTranslated={false}
            className="text-display typo-size-text-lg font-semibold mb-4"
          />
          
          <Toggle
            testId="notifications"
            title="Push Notifications"
            description="Receive notifications about updates and messages"
            value={toggleStates.notifications}
            onValueChange={(value) => handleToggleChange('notifications', value)}
          />
          
          <Toggle
            testId="darkMode"
            title="Dark Mode"
            description="Switch between light and dark theme"
            value={toggleStates.darkMode}
            onValueChange={(value) => handleToggleChange('darkMode', value)}
          />
          
          <Toggle
            testId="rememberMe"
            title="Remember Me"
            value={toggleStates.rememberMe}
            onValueChange={(value) => handleToggleChange('rememberMe', value)}
          />
          
          <Toggle
            testId="autoSave"
            title="Auto Save"
            description="Automatically save your work every few minutes"
            value={toggleStates.autoSave}
            onValueChange={(value) => handleToggleChange('autoSave', value)}
          />
          
          <Toggle
            testId="disabled"
            title="Disabled Toggle"
            description="This toggle is disabled and cannot be changed"
            value={toggleStates.disabled}
            onValueChange={(value) => handleToggleChange('disabled', value)}
            disabled={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
