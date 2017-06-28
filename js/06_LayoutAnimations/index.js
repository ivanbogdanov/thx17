import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native'
import Theme from 'react.force.base.theme'
import Swiper from '../common/Swiper'
import Slide from '../common/Slide'
import SlideText from '../common/SlideText'
import {SlideUpFadeIn} from '../common/Animations'
import routes, { getNext } from '../routes'


const CustomLayoutSpring = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 2.0,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.5,
  }
}


export default class LayoutAnimations extends PureComponent {

  static navigationOptions = {
    drawerLabel: 'Layout Animations',
    drawerIcon: ({ tintColor }) => (
      <Theme.Icons.Utility
        name="magicwand"
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

  componentDidMount() {
    setInterval
  }

  _handleNext() {
    this.props.navigation.navigate(this.nextRouteName)
  }

  _addItem() {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({
      count:this.state.count+1
    })
  }

  _renderItem(index) {
    return (
      <TouchableOpacity key={'item_'+index} style={styles.item} onPress={this._addItem.bind(this)}>
        <Text style={styles.itemLabel}>Item: {index}</Text>
      </TouchableOpacity>
    )
  }

  _renderItems() {
    const items = []
    let i = 0;
    do {
       i += 1;
       items.push(this._renderItem(i))
    } while (i < this.state.count)
    return items
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper onNext={this._handleNext.bind(this)} nextLabel={this.nextRouteComponent.navigationOptions.drawerLabel}>
          <Slide>
            <SlideText>Layout</SlideText>
            <SlideText>Animations</SlideText>
            <SlideUpFadeIn delay={300} style={styles.mainIconContainer}>
              <Theme.Icons.Utility
                name="magicwand"
                style={styles.mainIcon}
                iconColor='#ffffff'
              />
            </SlideUpFadeIn>
          </Slide>

          <Slide>
            <SlideText>on layout update</SlideText>
          </Slide>

          <Slide>
            <SlideText>
              <Text onPress={this._addItem.bind(this)}>example:</Text>
            </SlideText>
            { this._renderItems() }
          </Slide>

          <Slide>
            <SlideText>easy to configure</SlideText>
          </Slide>

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#d4504c',
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
