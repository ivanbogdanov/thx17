import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import ScrollExample from './ScrollExample'


export default class AnimatedLibrary extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Declarative Native Animations',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Standard
        name="calibration"
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
            <SlideText>Declarative</SlideText>
            <SlideText>Native</SlideText>
            <SlideText>Animations</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Standard
                name="calibration"
                style={styles.mainIcon}
                iconColor='#ffffff'
                height={80}
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>Animated:</SlideText>
            <SlideText> </SlideText>
            <SlideText>relationships</SlideText>
            <SlideText>between</SlideText>
            <SlideText>inputs</SlideText>
            <SlideText>and</SlideText>
            <SlideText>outputs</SlideText>
          </Slide>

          <Slide>
            <ScrollExample />
          </Slide>

          <Slide>
            <SlideText>Animatable Components:</SlideText>
              <SlideText> </SlideText>
              <SlideText>Image</SlideText>
              <SlideText>ScrollView</SlideText>
              <SlideText>Text</SlideText>
              <SlideText>View</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(150, 0, 150, 1)',
  },
  icon: {
    width: 24,
    height: 24,
  },
  mainIconContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
  },
  mainIcon: {
    flex:0,
    width: 80,
    height: 80,
    borderColor:'white',
    borderWidth:1,
    borderRadius:5
  }
})
