import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import Swiper from 'react-native-swiper'

import NextChapterButton from './NextChapterButton'

export default class SwipePage extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      displayNextButton: false,
      openPanelIndex: 0
    };
  }

  _onMomentumScrollEnd (e, state, context) {
    if(state.index + 1 >= state.total ){
      this.setState({displayNextButton:true});
    }
    else{
      this.setState({displayNextButton:false});
    }
    this.setState({openPanelIndex:context.state.index});
  }

  _handlePress() {
    alert('NEXT')
  }

  render() {
    const activeDotColor = '#fff'
    const dotColor = 'rgba(255,255,255,.3)'

    return (
      <View style={{flex:1}}>
        <Swiper
          dot={<View style={{backgroundColor:dotColor, width: 12, height: 12,borderRadius: 6, marginLeft: 7, marginRight: 7,}} />}
          activeDot={<View style={{backgroundColor: activeDotColor, width: 12, height: 12, borderRadius: 6, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{ bottom: 80 }}
          loop={false}
          onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
          >
          { this.props.children }
        </Swiper>
        <NextChapterButton
          label={this.props.nextLabel}
          show={this.state.displayNextButton}
          delay={500}
          onPress={this.props.onNext}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'blue',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  titleContainer: {
    paddingTop:50,
    paddingBottom:50,
  },
  title: {
    textAlign:'center',
    fontSize:24,
    color:'white'
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
    width: 60,
    height: 60,
  }
})
