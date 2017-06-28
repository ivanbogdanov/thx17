import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native'


export default class ScrollExample extends Component {

  constructor(props) {
    super(props)
    this.scrollY = new Animated.Value(0)
  }

  _renderItem(index) {
    const color = this.scrollY.interpolate({
        inputRange: [0, 500],
        outputRange: ['rgba(50, 0, 50, 1)','rgba(0, 100, 150, 1)']
    });
    return (
      <Animated.View key={'item_'+index} style={[styles.item,{backgroundColor:color}]} >
        <Text style={styles.itemLabel}>Item:: {index}</Text>
      </Animated.View>
    )
  }

  _renderItems() {
    const items = []
    let i = 0;
    do {
       items.push(this._renderItem(++i))
    } while (i < 30)
    return items
  }

  render() {
    const color = this.scrollY.interpolate({
        inputRange: [0, 500],
        outputRange: ['rgba(150, 0, 150, 1)', 'rgba(0, 100, 0, 1)']
    });
    return (
      <Animated.View style={[styles.container,{backgroundColor:color}]}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: this.scrollY
                }
              }
            }]
          )}
          style={styles.scroll}>
          { this._renderItems() }
        </ScrollView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60,
  },
  scroll: {
    flex:1,
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
    color:'white',
  },
})
