## react-native-weather: A dynamic weather component for React Native apps

react-native-weather provides a React Native `<WeatherWidget />` component that takes in props and generates a widget containing the current weather conditions, temperature, and chance of precipitation for a given location via the DarkSky.net weather API.

In order to use this widget, you will need a DarkSky.net API key.  [Click here to sign up for a DarkSky API key.](https://darksky.net/dev/ "DarkSky.net API Sign Up")

### Installation:

```
npm install --save react-native-weather
```

### Usage:

To use the WeatherWidget, import the WeatherWidget from 'react-native-weather', placing curly braces around WeatherWidget in your import statement:

```javascript
...
import { WeatherWidget } from 'react-native-weather';
...
```
Then place the `<WeatherWidget />` component in your `render(){ return(); }` method, passing your API key, your latitude (lat), and your longitude(lng) through it as props:

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

##### Note re: lat & lng
Northern latitudes and eastern longitudes are positive values, while southern latitudes and western longitudes are negative(-) values.

i.e.: If the location you are passing through the widget is in the northwestern hemisphere, you will pass it through as: `lat={"val"} lng={"-val"}`.

### Optional props

`<WeatherWidget />` also accepts the optional prop `location={"location"}`, which will render a string in the left title area of the widget.

If you do not pass a location prop through WeatherWidget, the default text for the widget title area will read "Current Weather".

### Credits

react-native-weather was coded by [Nick West](https://www.nickwest.io "NickWest.io")

react-native-weather was built for use with the [DarkSky.net Weather API](https://www.darksky.net)

react-native-weather uses [Allessio Atzeni's Meteocons](http://www.alessioatzeni.com/meteocons/ "Meteocons by Allessio Atzeni")
