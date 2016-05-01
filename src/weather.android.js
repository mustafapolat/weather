/**
 * @flow
 */
'use strict';

var React = require('react-native');
var {
	StyleSheet,
  	Text,
  	View,
  	TextInput,
  	Image
} = React;

var Forecast = require('./forecast.android');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      zip: 'istanbul',
      forecast: null
    };
  },

  _handleTextChange: function(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=metric&lang=tr&appid=fa17c0586d65d0c3bf7fee044aeb34bf')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp,
            name: responseJSON.name,
            icon: 'http://openweathermap.org/img/w/'+ responseJSON.weather[0].icon + '.png'
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
      
  },

  render: function() {
    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast 
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={parseInt(this.state.forecast.temp)}
                  name={this.state.forecast.name}
                  icon={this.state.forecast.icon}/>;
      console.log('şehir : ' + this.state.forecast.name);            
    }
    else{
    	console.log("boşşş");
    }
    return (
      <View style={styles.container}>
        <Image source={require('./images/cloud.jpg')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this._handleTextChange}/>
             </View>
             <Text style={styles.mainText}>
                için hava durumu
             </Text>
           </View>
           {content}
         </View>
        </Image>
      </View>
    );
  }
});

var baseFontSize = 20;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 100,
    height: baseFontSize,
    padding: 0,
    marginRight: 2
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

module.exports = Weather;
