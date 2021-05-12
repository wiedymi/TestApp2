import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, Button, AppState} from 'react-native';

const Test = () => {
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

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
          <Text style={styles.label}>
            Don't forgot to save the changes Your did
          </Text>
          <Button style={styles.button} title="Dismiss" onPress={onDismiss} />
        </View>
      )}
      <Text style={styles.label}>Some UI would be here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  notifiction: {},
  button: {},
});

export default Test;
