import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Theme from 'react.force.base.theme';
import { SwipePage } from '../Common';
import { SlideUpFadeIn } from '../Animations';

import codeSampleCSS from './codeSampleCSS';

import styles from './styles';

class Slide extends Component {

  _renderSampleCSS () {
    return codeSampleCSS.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Styles
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='brush'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            mimic CSS
          </Text>
          <View style={styles.codeContainer}>
            { this._renderSampleCSS() }
          </View>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
