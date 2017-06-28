import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { SwipePage } from '../Common';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../Animations';

import styles from './styles';

class Slide extends Component {

  render() {
    return (
      <SwipePage route={this.props.route} onNext={this.props.onNext} nextLabel={this.props.nextLabel}>

        <View style={styles.container}>
          <Text style={styles.text}>
            Salesforce
          </Text>
          <Text style={styles.text}>
            Mobile SDK
          </Text>
          <Text style={styles.text}>
            Sample Apps
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='setup_assistant_guide'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            SmartSyncExplorer
          </Text>
          <Text style={styles.text}>
            ReactNative
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Dreamhouse App
          </Text>
        </View>

      </SwipePage>
    );
  }
}

export default Slide
