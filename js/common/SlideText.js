import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

export default class SlideText extends PureComponent {

  render() {
    return (
      <Text style={styles.title}>
        { this.props.children }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:36,
    color:'white',
    padding:4,
    fontFamily: 'SalesforceSans-Light',
  }
})
