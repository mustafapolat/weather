/**
 * @flow
 */
'use strict';

var React = require('react-native'); 
var {
  StyleSheet,
  Text,
  View,
  Image
} = React;
var Forecast = React.createClass({ 
  render: function() {
    console.log("icon : " + this.props.icon);
    return ( 
        <View style={styles.container}>
            <Text style={styles.biggerText}> {this.props.name}</Text>
            <Text style={styles.bigText}> {this.props.description}</Text>
            <Text style={styles.bigText}> {this.props.temp}°C</Text>
            <Image style={styles.icon} source={{uri: this.props.icon}} />
        </View>
    ); 
  }
});
var styles = StyleSheet.create({ 
  container: {
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  biggerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  icon : {
    flex:1,
    width: 75,
    height: 75
  }
})
module.exports = Forecast;