import {Alert} from 'react-native';

export const RemoveAlert = (data, id, setData) => {
  Alert.alert('알림', '정말 삭제하시겠습니까?', [
    {
      text: '취소',
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: '삭제',
      onPress: () => {
        const nextData = data.filter(item => item.id !== id);
        setData(nextData);
      },
      style: 'default',
    },
  ]);
};

export const allRemoveAlert = (data, setData) => {
  if (data.every(item => item.isDone == false)) {
    noneRemoveAlert();
    return;
  }

  Alert.alert('알림', '정말 모든 한 일을 삭제하시겠습니까?', [
    {
      text: '취소',
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: '삭제',
      onPress: () => {
        const nextData = data.filter(item => item.isDone === false);
        setData(nextData);
      },
      style: 'default',
    },
  ]);
};

export const noneRemoveAlert = () => {
  Alert.alert('알림', '삭제할 일이 없습니다.', [
    {
      text: '확인',
      onPress: () => {},
      style: 'cancel',
    },
  ]);
};
