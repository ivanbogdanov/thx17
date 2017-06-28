import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import ExamplePropType from './ExamplePropType'

import styles from './styles'

export default class DataAndState extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Reusable Components',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="puzzle"
        style={styles.icon}
      />
    )
  }

  constructor(props){
    super(props)
    const { nextRouteName,nextRouteComponent } = getNext(this.props.navigation.state.routeName)
    this.nextRouteName = nextRouteName
    this.nextRouteComponent = nextRouteComponent
    this.state = {
      count:1
    }
  }

  _handleNext() {
    this.props.navigation.navigate(this.nextRouteName)
  }


  render() {
    return (
      <View style={styles.container}>
        <Swiper onNext={this._handleNext.bind(this)} nextLabel={this.nextRouteComponent.navigationOptions.drawerLabel}>
          <Slide>
            <SlideText>Reusable</SlideText>
              <SlideText>Components</SlideText>

            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="puzzle"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>Components</SlideText>
            <SlideText>as</SlideText>
            <SlideText>short</SlideText>
            <SlideText>as</SlideText>
            <SlideText>possible</SlideText>
          </Slide>

          <Slide>
            <SlideText>NPM</SlideText>
            <SlideText>packages</SlideText>
            <SlideText>for common code</SlideText>
          </Slide>

          <Slide>
            <SlideText>assets: Icons</SlideText>
            <SlideText>as</SlideText>
            <SlideText>icon fonts</SlideText>
            <SlideText>or</SlideText>
            <SlideText>SVG</SlideText>
          </Slide>

          <Slide>
            <SlideText>linting</SlideText>
            <SlideText>and</SlideText>
            <SlideText>code formatting</SlideText>
          </Slide>

          <Slide>
            <SlideText>use</SlideText>
            <SlideText>PropTypes</SlideText>
            <ExamplePropType category='GOOD' text='simple text' />
          </Slide>

          <Slide>
            <SlideText>strongtyping:</SlideText>
            <SlideText> </SlideText>
            <SlideText>Flow,</SlideText>
            <SlideText>TypeScript</SlideText>
          </Slide>

          <Slide>
            <SlideText>Tests:</SlideText>
            <SlideText> </SlideText>
            <SlideText>Jest,</SlideText>
            <SlideText>Appium</SlideText>
            <SlideText>etc</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}
