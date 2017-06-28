import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';


class SlideRightFadeIn extends Component {

   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
       xAnim: new Animated.Value(0), // init opacity 0
     };
   }

   componentDidMount() {
    this.doAnimate();
   }

   doAnimate() {
    const timing = Animated.timing;
    const delay = Animated.delay;
    const spring = Animated.spring;

     Animated.sequence([
      delay(this.props.delay),
      spring(
        this.state.fadeAnim,
        {
          toValue: this.props.reverse?0:1,
          duration:450,
        }
      ),
    ]).start();
   }

   render() {
    const animatedStyle = {
     opacity: this.state.fadeAnim, // Binds directly
     transform: [{
       translateX: this.state.fadeAnim.interpolate({
         inputRange: [0, 1],
         outputRange: [-150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
       }),
     }],
    };
    return (
      <Animated.View {... this.props} style={[this.props.style, animatedStyle]}>
        {this.props.children}
      </Animated.View>
    );
   }

   componentDidUpdate(prevProps) {
    if(this.props.reverse !== prevProps.reverse){
      this.doAnimate();
    }
   }
 };

SlideRightFadeIn.defaultProps = {
  delay: 300
};

export default SlideRightFadeIn
