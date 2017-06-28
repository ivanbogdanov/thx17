import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import Example from './Example'

import styles from './styles'

export default class PlatformSpecific extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Platform Specific code',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="event"
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
            <SlideText>Platform</SlideText>
            <SlideText>Specific</SlideText>
            <SlideText>code</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="event"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>Some</SlideText>
            <SlideText>Native Components</SlideText>
            <SlideText>depend on</SlideText>
            <SlideText>Platform /</SlideText>
            <SlideText>OS version</SlideText>
          </Slide>

          <Slide>
            <SlideText>Example:</SlideText>
            <SlideText> </SlideText>
            <SlideText>Date Picker,</SlideText>
            <SlideText>Android Ripple Effect</SlideText>
            <SlideText>etc</SlideText>
          </Slide>

          <Slide>
            <Example />
          </Slide>

          <Slide>
            <SlideText>platform-specific</SlideText>
            <SlideText>file extensions</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}
