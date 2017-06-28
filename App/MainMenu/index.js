import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Theme from 'react.force.base.theme';

import MenuItem from './MenuItem';

import styles from './styles';

import routes from '../routes';

class MainMenu extends Component {

  _handleMenuItemPress(name,next) {
    if(this.props.onMenuPress){
      this.props.onMenuPress(name,next);
    }
  }

  _renderMenuItems() {
    return routes.map((item,index) => {
        return (
          <MenuItem
            key={'menuItem_'+index}
            onPress={this._handleMenuItemPress.bind(this)}
            name={item.name}
            label={item.label}
            icon={item.icon} />
        );
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this._renderMenuItems() }
      </ScrollView>
    );
  }
}

export default MainMenu
