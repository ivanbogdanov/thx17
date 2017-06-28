import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';


class MainMenu extends Component {

  _handlePress() {
    if(this.props.onPress){
        this.props.onPress(this.props.name, this.props.next);
    }
  }

  _renderIcon() {
    if(this.props.icon && this.props.icon.name && this.props.icon.type){
      if(this.props.icon.type === 'Utility'){
        if(this.props.name === 'Most_Native_Apps_Suck'){
          return <Theme.Icons.Utility name='like' style={[styles.icon,{transform:[{rotate: '180deg'}]}]} />;
        }
        return <Theme.Icons.Utility name={this.props.icon.name} style={styles.icon} />;
      }
      if(this.props.icon.type === 'Custom'){
        return <Theme.Icons.Custom name={this.props.icon.name} style={styles.icon} />;
      }
      if(this.props.icon.type === 'Standard'){
        return <Theme.Icons.Standard name={this.props.icon.name} style={styles.icon} />;
      }

    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._handlePress.bind(this)}>
        <View style={styles.iconContainer}>{ this._renderIcon() }</View>
        <Text style={styles.text}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default MainMenu
