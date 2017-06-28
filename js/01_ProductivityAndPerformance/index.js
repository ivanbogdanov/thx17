import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import Theme from 'react.force.base.theme'

import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'


export default class ProductivityAndPerformance extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Productivity and Performance',
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
  }

  _handleNext() {
    this.props.navigation.navigate(this.nextRouteName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          onNext={this._handleNext.bind(this)}
          nextLabel={this.nextRouteComponent.navigationOptions.drawerLabel}>

          <Slide>
            <SlideText>Productivity</SlideText>
            <SlideText>&</SlideText>
            <SlideText>Performance</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="setupassistantguide"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>easy to start</SlideText>
          </Slide>

          <Slide>
            <SlideText>great CLI</SlideText>
          </Slide>

          <Slide>
            <SlideText>documentation</SlideText>
          </Slide>

          <Slide>
            <SlideText>open source</SlideText>
            <SlideText>components</SlideText>
          </Slide>

          <Slide>
            <SlideText>simple JS API</SlideText>
          </Slide>

        </Swiper>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1589ee',
  },
  wrapper:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  titleContainer: {
    paddingTop:50,
    paddingBottom:50,
  },
  title: {
    textAlign:'center',
    fontSize:24,
    color:'white'
  },
  icon: {
    width: 24,
    height: 24,
  },
  mainIconContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  mainIcon: {
    marginTop:50,
    width: 80,
    height: 80,
  }
})