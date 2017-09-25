import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { View, Text, StyleSheet } from 'react-primitives';

import Button from '../';

storiesOf('Shared Components', module).add('Button', () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button</Text>
      <View style={styles.example}>
        <Text style={styles.exampleTitle}>Example</Text>
        <View style={styles.exampleWrapper}>
          <Button text="Press Me!" onPress={action('Button Pressed!')} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  example: {
    borderColor: '#dddddd',
    borderWidth: 1,
    display: 'inline-flex',
    flex: 0,
    padding: 16,
  },
  exampleTitle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  exampleWrapper: {
    width: 300,
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});