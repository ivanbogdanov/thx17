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
    drawerLabel: 'Data and State',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="summary"
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
            <SlideText>Data and State</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="summary"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>state for data</SlideText>
          </Slide>

          <Slide>
            <SlideText>use state</SlideText>
            <SlideText>as little</SlideText>
            <SlideText>as possible</SlideText>
          </Slide>

          <Slide>
            <SlideText>state updates</SlideText>
            <SlideText>may trigger</SlideText>
            <SlideText>expensive rerenders</SlideText>
          </Slide>

          <Slide>
            <SlideText>keep</SlideText>
            <SlideText>components</SlideText>
            <SlideText>stateless</SlideText>
          </Slide>

          <Slide>
            <SlideText>store</SlideText>
            <SlideText>state</SlideText>
            <SlideText>in one place</SlideText>
          </Slide>

          <Slide>
            <SlideText>use</SlideText>
            <SlideText>Redux</SlideText>
            <SlideText>or similar</SlideText>
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
