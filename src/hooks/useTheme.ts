import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';

export function useTheme() {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(systemScheme || 'light');

  const { setColorScheme } = useNativewindColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
