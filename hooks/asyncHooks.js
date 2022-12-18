import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

export const useGetData = setData =>
  useEffect(() => {
    const getDataAsync = async () => {
      try {
        const rawData = await AsyncStorage.getItem('TODO');
        if (rawData != null) {
          setData(JSON.parse(rawData));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getDataAsync();
  }, []);

export const useSetData = data =>
  useEffect(() => {
    const setDataAsync = async _data => {
      try {
        const nextData = JSON.stringify(_data);
        await AsyncStorage.setItem('TODO', nextData);
      } catch (e) {
        console.log(e);
      }
    };
    setDataAsync(data);
  }, [data]);
