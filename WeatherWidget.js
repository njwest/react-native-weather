import React, { Component } from 'react';
import { NetInfo, Image, View, Text, StyleSheet } from 'react-native';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      icon: 'default',
      temp: '',
      precipChance: '',
      summary: 'Weather is Offline',
      isConnected: null,
      locationName: 'Current \nWeather'
    }
  }

  componentDidMount() {
    if (this.props.location){
      this.setState({locationName: this.props.location})
    }

    return fetch('https://api.darksky.net/forecast/' + this.props.api + '/' + this.props.lat + ',' + this.props.lng).then((response) => response.json()).then((responseJson) => {
      this.setState({summary: responseJson.currently.summary, temp: (Math.round(10 * responseJson.currently.temperature)/10) + '°F', icon: responseJson.currently.icon, precipChance: Math.round(responseJson.currently.precipProbability * 1000)/10, isLoading: false});
    }).catch((error) => {
      console.error(error);
      this.setState({isLoading: false});
    });
  }

  render() {
    if (this.state.isLoading) {
      return (<Text>Loading...</Text>)
    }

    const icons = {
      'partly-cloudy-day': require('./weather-icons/partly-cloudy-day.png'),
      'partly-cloudy-night': require('./weather-icons/partly-cloudy-night.png'),
      'clear-day': require('./weather-icons/clear-day.png'),
      'clear-night': require('./weather-icons/clear-night.png'),
      'rain': require('./weather-icons/rain.png'),
      'snow': require('./weather-icons/snow.png'),
      'sleet': require('./weather-icons/sleet.png'),
      'wind': require('./weather-icons/wind.png'),
      'fog': require('./weather-icons/fog.png'),
      'cloudy': require('./weather-icons/cloudy.png'),
      'hail': require('./weather-icons/hail.png'),
      'thunderstorm': require('./weather-icons/thunderstorm.png'),
      'tornado': require('./weather-icons/tornado.png'),
      'meteor-shower': require('./weather-icons/meteor-shower.png'),
      'default': require('./weather-icons/default.png')
    }

    function getIcon(icon){
      return icons[icon];
    }

    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.state.locationName}</Text>
            </View>
            <View style={[styles.summaryContainer, (this.state.summary.length >= 20) && styles.summaryContainerLong]}>
              <Text style={styles.summary}>{this.state.summary}</Text>
              <Image style={styles.icon} source={ getIcon(this.state.icon) } />
            </View>
            <View style={styles.tempContainer}>
              <Text>{this.state.temp}</Text>
              <View style={{flexDirection: 'row'}}>
              <Text>
                {this.state.precipChance}%
              </Text>
              <Image style={styles.precipImage} source={require('./weather-icons/precip.png')} />
              </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    borderTopWidth: 1,
    borderBottomColor: '#8294a0',
    borderBottomWidth: 1,
    borderBottomColor: '#8294a0',
  },
  titleContainer:{
    flex: 1,
    borderRightWidth: 1
  },
  title:{
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    color: 'black',
    fontWeight: '500',
    textAlign: 'right'
  },
  summaryContainer: {
    flex: 1.5,
    flexDirection: 'row',
    marginTop: 13
  },
  summaryContainerLong: {
    flex: 1.5,
    flexDirection: 'row',
    marginTop: 5
  },
  summary: {
    marginLeft: 20,
    marginRight: 10
  },
  icon: {
    marginTop: -6
  },
  tempContainer: {
    flex: .5,
    flexDirection: 'column',
    marginTop: 2,
    marginRight: 15,
    alignItems: 'flex-end'
  },
  precipImage: {
    marginTop: 3
  }
});

export { WeatherWidget };
