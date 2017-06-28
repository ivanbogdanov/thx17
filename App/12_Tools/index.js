import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Theme from 'react.force.base.theme';
import { SwipePage } from '../Common';
import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class ToolsSlide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Tools
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='custom_apps'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Inspector
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Remote JS Debugger
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Perf Monitor
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Native Dev Tools
          </Text>
        </View>
      </SwipePage>
    );
  }
}

export default ToolsSlide
