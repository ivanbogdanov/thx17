import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../Animations';

import swiftSampleCode from './swiftSampleCode';

import styles from './styles';

import { SwipePage } from '../Common';

class Slide extends Component {

  _renderSwiftCode () {
    return swiftSampleCode.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
      <View style={styles.container}>
        <Text style={styles.text}>
          ...but
        </Text>
        <Text style={styles.text}>
          many Native Apps
        </Text>
        <Text style={styles.text}>
          are ...
        </Text>
        <SlideUpFadeIn>
          <TouchableOpacity style={styles.iconContainer}>
            <Theme.Icons.Utility
              iconColor='#ffffff'
              name="like"
              style={styles.icon}
            />
          </TouchableOpacity>
        </SlideUpFadeIn>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Why?</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Native is hard</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.codeText}>Swift: fetch sample code</Text>
        <View style={styles.codeContainer}>
          { this._renderSwiftCode() }
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Many devs</Text>
        <Text style={styles.text}>are afraid of</Text>
        <Text style={styles.text}>making mistakes</Text>
        <Text style={styles.text}>and</Text>
        <Text style={styles.text}>build</Text>
        <Text style={styles.text}>boring apps</Text>
      </View>
    </SwipePage>
    );
  }
}

export default Slide
