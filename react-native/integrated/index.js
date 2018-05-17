import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

class RNHighScores extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          systemSetting
        </Text>
      </View>
    );
  }
}

class RNHighScoresClone extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          systemSettingClone
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 整体js模块的名称
AppRegistry.registerComponent('systemSetting', () => RNHighScores);
AppRegistry.registerComponent('systemSettingClone', () => RNHighScoresClone);
