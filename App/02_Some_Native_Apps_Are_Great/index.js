import React, { Component } from 'react';
import { Text,View } from 'react-native';

import Theme from 'react.force.base.theme';

import { SwipePage } from '../Common';


import { SlideUpFadeIn } from '../Animations';

import { NextChapterButton } from '../Common';

import styles from './styles';

class Slide extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header: null
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
      <View style={styles.container}>
        <Text style={styles.light}>
          Some
        </Text>
        <Text style={styles.text}>
          Native Apps are <Text style={styles.strong}>GREAT!</Text>
        </Text>
        <SlideUpFadeIn>
            <Theme.Icons.Utility
              iconColor='#ffffff'
              name="like"
              style={styles.icon}
            />
        </SlideUpFadeIn>
      </View>
      <View style={styles.container}>
        <Text style={styles.light}>
          Performance!
        </Text>
      </View>
    </SwipePage>

    );
  }
}

export default Slide
