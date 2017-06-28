import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class FlexboxPlayground extends Component {
  // Try setting `alignItems` to 'flex-start'
  // Try setting `justifyContent` to `flex-end`.
  // Try setting `flexDirection` to `row`.
  render() {
    return (
      <View style={[styles.container, {backgroundColor:'white'}]}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
      </View>
    );
  }
}

export default FlexboxPlayground
