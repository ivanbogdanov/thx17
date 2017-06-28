import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

import ScrollExample from './ScrollExample'


export default class Bridge extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Bridge Communication',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="sort"
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
            <SlideText>Bridge</SlideText>
            <SlideText>Communication</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="sort"
                style={styles.mainIcon}
                iconColor='#ffffff'
                height={80}
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>can</SlideText>
            <SlideText>be</SlideText>
            <SlideText>slow</SlideText>
          </Slide>

          <Slide>
            <SlideText>minimize</SlideText>
            <SlideText>serialization</SlideText>
          </Slide>

          <Slide>
            <SlideText>catching</SlideText>
          </Slide>

          <Slide>
            <SlideText>batching</SlideText>
          </Slide>

          <Slide>
            <SlideText>server/client:</SlideText>
            <SlideText> </SlideText>
            <SlideText>native</SlideText>
            <SlideText>JS</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#16325c',
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
  }
})
