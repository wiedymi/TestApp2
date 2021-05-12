import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useBlurEffect} from './useBlurEffect';

const Test = () => {
  const {notify, onDismiss} = useBlurEffect();

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
