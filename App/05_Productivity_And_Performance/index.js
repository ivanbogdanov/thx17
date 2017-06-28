import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SwipePage } from '../Common';

import { SlideRightFadeIn } from '../Animations';

import styles from './styles';

import reactSampleCode from './reactSampleCode';


class Slide extends Component {

  _renderSampleCode () {
    return reactSampleCode.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <View style={styles.titleCont}>
            <Text style={styles.title}>
              React Native
            </Text>
          </View>
          <Text style={styles.text}>
            React Productivity
          </Text>
          <Text style={styles.textAnd}>
            &
          </Text>
          <Text style={styles.text}>
            Native Performance
          </Text>
          <SlideRightFadeIn style={styles.iconCont}>
              <Theme.Icons.Custom
                name="custom80"
                style={styles.icon}
              />
          </SlideRightFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.codeText}>React: fetch sample code</Text>
          <View style={styles.codeContainer}>
            { this._renderSampleCode() }
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>iOS</Text>
          <Text style={styles.text}>Android</Text>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
