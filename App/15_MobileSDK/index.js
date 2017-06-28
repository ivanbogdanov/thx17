import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
            React Native
          </Text>
          <Text style={styles.text}>
            with
          </Text>
          <Text style={styles.text}>
            Salesforce Mobile
          </Text>
          <Text style={styles.text}>
            SDK
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
              <Theme.Icons.Utility
                name='salesforce1'
                iconColor='#ffffff'
                style={styles.icon}
              />
          </SlideUpFadeIn>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            APIs:
          </Text>
          <Text style={styles.text}>
            oauth
          </Text>
          <Text style={styles.text}>
            net
          </Text>
          <Text style={styles.text}>
            smartstore
          </Text>
          <Text style={styles.text}>
            smartsync
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            CLI:
          </Text>
          <Text style={styles.text}>
            forceios
          </Text>
          <Text style={styles.text}>
            forcedroid
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            UI Components:
          </Text>
          <Text style={styles.text}>
            Buttons
          </Text>
          <Text style={styles.text}>
            Tiles
          </Text>
          <Text style={styles.text}>
            Icons
          </Text>
          <Text style={styles.text}>
            etc
          </Text>

        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Data Components:
          </Text>
          <Text style={styles.text}>
            Sobject
          </Text>
          <Text style={styles.text}>
            Query List
          </Text>
          <Text style={styles.text}>
            Search List
          </Text>
        </View>


      </SwipePage>
    );
  }
}

export default Slide
