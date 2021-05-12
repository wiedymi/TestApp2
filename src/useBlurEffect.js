import {useState, useCallback, useEffect} from 'react';
import {AppState} from 'react-native';

export const useBlurEffect = () => {
  const [notify, setNotify] = useState(false);

  const onDismiss = useCallback(() => {
    setNotify(false);
  }, [setNotify]);

  const handleChange = useCallback(
    state => {
      if (!notify && state !== 'active') {
        setNotify(true);
      }
    },
    [notify, setNotify],
  );

  useEffect(() => {
    AppState.addEventListener('change', handleChange);

    return () => {
      AppState.removeEventListener('change', handleChange);
    };
  }, [handleChange]);

  return {notify, onDismiss};
};
