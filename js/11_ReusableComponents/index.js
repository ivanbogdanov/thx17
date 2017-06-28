import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'

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
            <SlideText>use</SlideText>
            <SlideText>PropTypes</SlideText>
          </Slide>

          <Slide>
            <SlideText>strongtyping:</SlideText>
            <SlideText> </SlideText>
            <SlideText>Flow,</SlideText>
            <SlideText>TypeScript</SlideText>
          </Slide>

          <Slide>
            <SlideText>Component unit tests:</SlideText>
            <SlideText> </SlideText>
            <SlideText>Jest</SlideText>
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
  item:{
    backgroundColor:'white',
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:5,
    margin:10
  },
  itemLabel: {
    textAlign:'center',
    fontSize:32,
    fontFamily: 'SalesforceSans-Light',
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
