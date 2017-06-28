import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SlideUpFadeIn } from '../Animations';
import { NextChapterButton } from '../Common';

import Theme from 'react.force.base.theme';


import styles from './styles';

class Slide extends Component {

  _handlePress() {
    if(this.props.onNext){
      this.props.onNext(this.props.route);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NextChapterButton label='' delay={1200} onPress={this._handlePress.bind(this)} />
        <SlideUpFadeIn delay={300} style={styles.infoContainer}>
        <Text style={styles.welcome}>
          Let's build
        </Text>
        <Text style={styles.welcome}>
          something
        </Text>
        <Text style={styles.strong}>
          GREAT!
        </Text>

        </SlideUpFadeIn>
        <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.iconContainer} >
          <Theme.Icons.Utility
            name="like"
            iconColor="#ffffff"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
