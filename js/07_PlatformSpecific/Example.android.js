import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SlideText from '../common/SlideText'

export default class Example extends Component {

  constructor(props){
    super(props)
    this.state = {
      timerDate:new Date()
    }
  }

  _handleDateChange(date) {
    this.setState({timerDate:date})
  }

  render() {
    return (
      <View style={styles.container}>
        <SlideText>Example:</SlideText>
        <Text style={styles.text}>Date Picker</Text>

        <Text style={styles.text}>TBD</Text>

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
