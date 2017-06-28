import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Slide extends PureComponent {

  render() {
    return (
      <View style={styles.wrapper}>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
})
