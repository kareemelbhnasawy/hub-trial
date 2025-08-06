import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const getString = (key: string) => storage.getString(key);
export const setString = (key: string, value: string) =>
  storage.set(key, value);
export const deleteKey = (key: string) => storage.delete(key);
