import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Theme from 'react.force.base.theme';
import { SwipePage } from '../Common';
import { SlideUpFadeIn } from '../Animations';

import codeSampleFlexbox from './codeSampleFlexbox';

import FlexboxPlayground from './FlexboxPlayground';

import styles from './styles';

class Slide extends Component {

  _renderSampleFlexbox () {
    return codeSampleFlexbox.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Layouts
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='layout'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Flexbox for layouts
          </Text>
          <View style={styles.codeContainer}>
            { this._renderSampleFlexbox() }
          </View>
        </View>
        <View style={[styles.container, {backgroundColor:'white'}]}>
          <FlexboxPlayground />
        </View>
        <View style={styles.container}>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
