import React, { Component } from 'react';

import { Text, View } from 'react-native';

import Theme from 'react.force.base.theme';

import { SwipePage } from '../Common';

import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel} lightScheme={true}>
        <View style={styles.container}>
          <Text style={styles.text}>
            React Native
          </Text>
          <Text style={styles.text}>
            Is Not Another
          </Text>
          <Text style={styles.text}>
            Hybrid
          </Text>
          <Text style={styles.text}>
            Framework
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Custom
                name="custom34"
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={[styles.text]}>
            Not inside WebView
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Javascript Thread
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Multiple Native Threads
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Async rendering
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Native Views
          </Text>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
