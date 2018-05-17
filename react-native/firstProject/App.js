/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
  PixelRatio,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress = () => {
    Alert.alert('alert title', 'alert content', 
    [
      { text: '取消', onPress: () => console.log('Cancel Pressed!') },
      { text: '确认', onPress: () => console.log('OK Pressed!') },
    ]);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!          
        </Text>

        <ActivityIndicator animating={true} style={{width: 100, height: 100}}></ActivityIndicator>
        
        <Text>
          设计稿宽: 750
        </Text>

        <Text>
          窗口物理像素: { width }
        </Text>

        <Text>
          设备密度：{PixelRatio.get()}
        </Text>
      
        <Text>
          窗口逻辑像素: {width * PixelRatio.get()}
        </Text>

        <Text>
          按钮相对设计稿px: 250px
        </Text>

        <Text>
          按钮相对屏幕逻辑像素px: {(PixelRatio.get() * width * 250) / 750}
        </Text>

        <Text>
          px转化为dp: {PixelRatio.roundToNearestPixel((width * 250) / 750)}
        </Text>

        <View>
          <Text style={[styles.instructions, styles.btn]}>
            {instructions}
          </Text>
          <Text style={[styles.instructions, styles.btn, {backgroundColor: "blue"}]}>
            {instructions}
          </Text>
          <Text style={[styles.instructions, styles.btn]}>
            {instructions}
          </Text>
        </View>

        <View style={[{ flexDirection: 'row' }]}>
          <Text style={[styles.instructions, { backgroundColor: "red", flex: 1 }]}>
            {instructions}
          </Text>
          <Text style={[styles.instructions, { backgroundColor: "blue", flex: 1 }]}>
            {instructions}
          </Text>
          <Text style={[styles.instructions, { backgroundColor: "red", flex: 1 }]}>
            {instructions}
          </Text>
        </View>

        <TouchableHighlight underlayColor="#000" onPress={this.onButtonPress}>
          <Text style={[styles.instructions, styles.btn]}>TouchableHighlight Me!</Text>
        </TouchableHighlight>

        <Text onPress={this.onButtonPress} style={[styles.instructions, styles.btn]}>Press Me!</Text>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({ 
  btn: { 
    backgroundColor: '#FF0000',
    // width: PixelRatio.roundToNearestPixel((width * 250) / 750),
    width: width * 250 / 750,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
