import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import styles from './styles'

export default class NativeOrJS extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Code JS or Native?',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="strikethrough"
        style={styles.icon}
      />
    )
  }

  constructor(props){
    super(props)
    const { nextRouteName,nextRouteComponent } = getNext(this.props.navigation.state.routeName)
    this.nextRouteName = nextRouteName
    this.nextRouteComponent = nextRouteComponent
  }

  _handleNext() {
    this.props.navigation.navigate(this.nextRouteName)
  }


  render() {
    return (
      <View style={styles.container}>
        <Swiper onNext={this._handleNext.bind(this)} nextLabel={this.nextRouteComponent.navigationOptions.drawerLabel}>
          <Slide>
            <SlideText>Code</SlideText>
            <SlideText>JS or Native?</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="strikethrough"
                style={styles.mainIcon}
                iconColor='#ffffff'
                height={80}
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>Minimize</SlideText>
            <SlideText>bridge</SlideText>
            <SlideText>communication</SlideText>
          </Slide>

          <Slide>
            <SlideText>JS</SlideText>
            <SlideText>bundle</SlideText>
            <SlideText>size matters</SlideText>
          </Slide>

          <Slide>
            <SlideText>avoid</SlideText>
            <SlideText>duplicate</SlideText>
            <SlideText>code</SlideText>
          </Slide>

          <Slide>
            <SlideText>example:</SlideText>
            <SlideText> </SlideText>
            <SlideText>rendering</SlideText>
            <SlideText>localized date/time format</SlideText>
          </Slide>

          <Slide>
            <SlideText>3 ways to implement:</SlideText>
            <SlideText> </SlideText>
            <SlideText>pure JS</SlideText>
            <SlideText>or</SlideText>
            <SlideText>native + bridge</SlideText>
            <SlideText>or</SlideText>
            <SlideText>native view</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}
