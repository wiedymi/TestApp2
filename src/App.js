import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Platform, AppState} from 'react-native';

const isWeb = Platform.OS === 'web';
const appState = isWeb ? window : AppState;

const Test = () => {
  const [notify, setNotify] = useState(false);

  const toggleNotify = useCallback(() => {
    setNotify(!notify);
  }, [notify]);

  useEffect(() => {
    appState.addEventListener('blur', toggleNotify);

    return () => {
      appState.removeEventListener('blur', toggleNotify);
    };
  }, [toggleNotify]);

  return (
    <View style={styles.container}>
      {notify && (
        <View style={styles.notification}>
          <Text style={styles.label}>
            Don't forgot to save the changes Your did
          </Text>
          <Button
            style={styles.button}
            title="Dismiss"
            onPress={toggleNotify}
          />
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
