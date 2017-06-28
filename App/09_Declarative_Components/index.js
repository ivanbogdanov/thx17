import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Theme from 'react.force.base.theme';
import { SwipePage } from '../Common';
import { SlideUpFadeIn } from '../Animations';

import codeSample from './codeSample';

import styles from './styles';

class Slide extends Component {

  _renderSampleCode () {
    return codeSample.map((line,index)=><Text key={'line_'+index} style={styles.code}>{line}</Text>)
  }

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Declarative Components
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='insert_tag_field'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>
        <View style={styles.container}>
          <Text style={styles.codeText}>
            React: Simple component
          </Text>
          <View style={styles.codeContainer}>
            { this._renderSampleCode() }
          </View>
        </View>
      </SwipePage>
    );
  }
}

export default Slide
