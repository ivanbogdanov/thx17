import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'


export default class NativeORJS extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'JS or Native?',
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
            <SlideText>Minimal</SlideText>
            <SlideText>bridge</SlideText>
            <SlideText>communication</SlideText>
          </Slide>

          <Slide>
            <SlideText>Minimize</SlideText>
            <SlideText>JS</SlideText>
            <SlideText>bundle</SlideText>
          </Slide>

          <Slide>
            <SlideText>no</SlideText>
            <SlideText>heavy</SlideText>
            <SlideText>JS libraries</SlideText>
          </Slide>

          <Slide>
            <SlideText>example:</SlideText>
            <SlideText> </SlideText>
            <SlideText>rendering</SlideText>
            <SlideText>localized date/time format</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#25b4e9',
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
