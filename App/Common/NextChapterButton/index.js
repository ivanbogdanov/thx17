import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import { SlideRightFadeIn,SlideUpFadeIn } from '../../Animations';

import styles from './styles';

class NextChapterButton extends Component {

  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <SlideRightFadeIn delay={this.props.delay} style={styles.nextButtonContainer}>
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.text}>
          { this.props.label }
        </Text>
        <Theme.Icons.Utility
          name="right"
          style={styles.menuNavIcon}
        />
      </TouchableOpacity>
      </SlideRightFadeIn>
    );
  }
}

NextChapterButton.defaultProps = {
  label: 'Next',
  show: true,
  delay: 200
};

export default NextChapterButton
