import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native'
import MapView from 'react-native-maps'
import SlideText from '../common/SlideText'

export default class MapExample extends Component {

  constructor(props){
    super(props)
    this.state = {
      region:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  _handleRegionChange(region) {
    this.setState({region:region})
  }

  render() {
    return (
      <View style={styles.container}>
        <SlideText>Example:</SlideText>
        <Text style={styles.text}>Native Map component</Text>
        <Text style={styles.text}>inside</Text>
        <Text style={styles.text}>React Native layout</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text}>latitude: {this.state.region.latitude}</Text>
        <Text style={styles.text}>longitude: {this.state.region.longitude}</Text>

        <MapView style={{flex:1,marginTop:30}}
          initialRegion={this.state.region}
          onRegionChange={this._handleRegionChange.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60,
  },
  text: {
    textAlign:'center',
    fontSize:22,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
})
