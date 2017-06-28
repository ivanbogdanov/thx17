import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import styles from './styles'

export default class DataAndState extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Redux',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="topic"
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
            <SlideText>Redux</SlideText>

            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="topic"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>Predictable</SlideText>
            <SlideText>State</SlideText>
            <SlideText>Management</SlideText>
          </Slide>

          <Slide>
            <SlideText>keep</SlideText>
            <SlideText>state</SlideText>
            <SlideText>in</SlideText>
            <SlideText>one place</SlideText>
          </Slide>

          <Slide>
            <SlideText>never</SlideText>
            <SlideText>update</SlideText>
            <SlideText>state</SlideText>
            <SlideText>directly</SlideText>
          </Slide>

          <Slide>
            <SlideText>use</SlideText>
            <SlideText>actions</SlideText>
          </Slide>

          <Slide>
            <SlideText>never</SlideText>
            <SlideText>read</SlideText>
            <SlideText>state</SlideText>
            <SlideText>directly</SlideText>
          </Slide>

          <Slide>
            <SlideText>use</SlideText>
            <SlideText>reducers</SlideText>
          </Slide>

          <Slide>
            <SlideText>use</SlideText>
            <SlideText>Data Components</SlideText>
            <SlideText>(Containers)</SlideText>
            <SlideText>to</SlideText>
            <SlideText>map</SlideText>
            <SlideText>redux state</SlideText>
            <SlideText>changes</SlideText>
            <SlideText>to properties</SlideText>
          </Slide>

          <Slide>
            <SlideText>Visual Components</SlideText>
            <SlideText>get data</SlideText>
            <SlideText>only</SlideText>
            <SlideText>via</SlideText>
            <SlideText>props</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}
