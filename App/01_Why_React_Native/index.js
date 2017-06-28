import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SlideUpFadeIn } from '../Animations';
import { NextChapterButton } from '../Common';

import Theme from 'react.force.base.theme';


import styles from './styles';

class Slide extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header: null
  }

  _handlePress() {
    const { navigate } = this.props.navigation
      navigate('Some_Native_Apps_Are_Great', { name: 'Jane' })
//    if(this.props.onNext){
//      this.props.onNext(this.props.route);
//    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NextChapterButton label='' delay={1200} onPress={this._handlePress.bind(this)} />
        <SlideUpFadeIn delay={300} style={styles.infoContainer}>
          <TouchableOpacity onPress={this._handlePress.bind(this)}>
            <Text style={styles.welcome}>
              Why React Native?
            </Text>
          </TouchableOpacity>

        </SlideUpFadeIn>
        <TouchableOpacity onPress={this._handlePress.bind(this)} style={styles.iconContainer}>
          <Theme.Icons.Utility
            name="topic"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Slide
