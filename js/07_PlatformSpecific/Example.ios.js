import React, { Component } from 'react'
import { View, Text, StyleSheet, DatePickerIOS } from 'react-native'
import SlideText from '../common/SlideText'

export default class Example extends Component {

  constructor(props){
    super(props)
    this.state = {
      timerDate:new Date(),
      date:new Date(),
    }
  }

  _handleTimerChange(date) {
    this.setState({timerDate:date})
  }

  _handleDateChange(date) {
    this.setState({date:date})
  }

  render() {
    return (
      <View style={styles.container}>
        <SlideText>Example:</SlideText>
        <Text style={styles.text}>Date Picker</Text>

        <DatePickerIOS
          date={this.state.timerDate}
          mode="time"
          minuteInterval={1}
          onDateChange = {this._handleTimerChange.bind(this)}
        />

        <DatePickerIOS
          date={this.state.date}
          mode="date"
          minuteInterval={1}
          onDateChange = {this._handleDateChange.bind(this)}
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
