import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Swiper from 'react-native-swiper';
import Theme from 'react.force.base.theme';

import { SlideUpFadeIn } from '../../Animations';
import NextChapterButton from '../NextChapterButton';

import routes from '../../routes';

import styles from './styles';

class SwipePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayNextButton: false,
      openPanelIndex: 0
    };
  }

  componentDidMount() {
    if(this.props.route && this.props.route.lightScheme){
      StatusBar.setBarStyle('default', true);
    }
    else{
      StatusBar.setBarStyle('light-content', true);
    }
  }

  _getNextRoute(routeName) {
    let index = routes.findIndex(route => route.name === routeName);
    let nextIndex = index+1;
    if(nextIndex >= routes.length){
      nextIndex = 0;
    }
    return routes[nextIndex];
  }

  _getNextRouteLabel() {
    let nextRoute = this._getNextRoute(this.props.route.name);
    return nextRoute.preview?nextRoute.preview:nextRoute.label;
  }

  _handlePress() {
    if(this.props.onNext){
      this.props.onNext(this.props.route);
    }
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

  render() {
    let nextLabel = this._getNextRouteLabel();
    'rgba(255,255,255,.3)'
    const activeDotColor = this.props.route.lightScheme?'#777':'#fff';
    const dotColor = this.props.route.lightScheme?'rgba(155,155,155,.3)':'rgba(255,255,255,.3)';
    return (
      <View style={styles.container}>
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
          label={nextLabel}
          show={this.state.displayNextButton}
          delay={500}
          onPress={this._handlePress.bind(this)}/>
      </View>
    );
  }
}

SwipePage.defaultProps = {
  route: {}
};

export default SwipePage
