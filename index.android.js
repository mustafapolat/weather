/**
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var Weather = require('./src/weather.android'); 

AppRegistry.registerComponent('Weather', () => Weather);
