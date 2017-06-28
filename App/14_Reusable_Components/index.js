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
            Reusable Components
          </Text>
          <SlideUpFadeIn style={styles.iconCont}>
            <Theme.Icons.Utility
              name='puzzle'
              iconColor='#ffffff'
              style={styles.icon}
            />
          </SlideUpFadeIn>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Clean codebase
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Cross-platform components
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Cross-project components
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            NPM
          </Text>
          <Text style={styles.text}>
            distribution
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Open-source community
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>
            Easy to test
          </Text>
        </View>

      </SwipePage>
    );
  }
}

export default Slide
