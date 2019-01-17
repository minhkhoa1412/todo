/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Application from './src/Application'

export default class App extends Component<Props> {
  render() {
    return (
      <Application/>
    );
  }
}