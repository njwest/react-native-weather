# react-native-weather: A dynamic weather component for React Native apps

react-native-weather provides a React Native `<WeatherWidget />` component that takes in props and generates a widget containing the current weather conditions, temperature, and chance of precipitation for a given location via the DarkSky.net weather API.

In order to use this widget, you will need a DarkSky.net API key.  [Click here to sign up for a DarkSky API key.](https://darksky.net/dev/ "DarkSky.net API Sign Up")

### Table of Contents

1. [Installation](https://github.com/njwest/react-native-weather#installation)

2. [Usage](https://github.com/njwest/react-native-weather#usage)

3. [Optional Props](https://github.com/njwest/react-native-weather#optional-props)

4. [Example Usage](https://github.com/njwest/react-native-weather#example-usage)

5. [Credits](https://github.com/njwest/react-native-weather#credits)

5. [Contribute!](https://github.com/njwest/react-native-weather#contribute)

## Installation

```
npm i --save react-native-weather
```

## Usage

To use the WeatherWidget, import the WeatherWidget from 'react-native-weather', placing curly braces around WeatherWidget in your import statement:

```javascript
...
import { WeatherWidget } from 'react-native-weather';
...
```
Then place the `<WeatherWidget />` component in your `render(){ return(); }` method, passing your DarkSky.net API key, your latitude (lat), and your longitude(lng) through it as props:

```javascript
...
render() {
  return(
    <WeatherWidget
      api={"your-DarkSky.net-api-here"}
      lat={"lat"}
      lng={"lng"}
      />
  );
}
```

`<WeatherWidget />` should have a parent view with a style prop of Flex: 1.

#### Note re: lat & lng
Northern latitudes and eastern longitudes are positive values, while southern latitudes and western longitudes are negative(-) values.

i.e.: If the location you are passing through the widget is in the northwestern hemisphere, you will pass it through as: `lat={"val"} lng={"-val"}`.

## Optional Props

`<WeatherWidget />` also accepts the optional prop `location={"location"}`, which will render a string in the left title area of the widget.

If you do not pass a location prop through WeatherWidget, the default text for the widget title area will read "Current Weather".

## Example Usage

The following is an example of the `<WeatherWidget />` in use in the Elephant Swamp Guide [iOS](https://itunes.apple.com/nz/app/elephant-swamp-guide/id1242677669?mt=8 "iOS") and [Android](https://play.google.com/store/apps/details?id=com.elephant_swamp_guide&hl=en "Android") mobile app.

![The Weather Widget in use in the Elephant Swamp Guide app](http://i.imgur.com/H1MqHYv.png "The WeatherWidget in use in the Elephant Swamp trail guide app")

Please feel free to email me (mail@NickWest.io) screenshots of react-native-weather in use in your app and I will post links/screenshots here!

## Credits

react-native-weather was coded by [Nick West](https://www.nickwest.io "NickWest.io")

react-native-weather was built for use with the [DarkSky.net Weather API](https://www.darksky.net)

react-native-weather uses [Allessio Atzeni's Meteocons](http://www.alessioatzeni.com/meteocons/ "Meteocons by Allessio Atzeni")

## Contribute!

If you would like to contribute code to react-native-weather, contact me at mail@NickWest.io with your component and improvement ideas or [open up an issue](https://github.com/njwest/react-native-weather/issues "Open an Issue") to get my attention!
