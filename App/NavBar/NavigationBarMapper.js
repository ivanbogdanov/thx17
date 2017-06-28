import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';

module.exports = (config) => ({

  LeftButton: (route, navigator, index, navState) => {
    const iconColor = route.lightScheme?'#777777':'#ffffff';
    return  (
      <TouchableOpacity onPress={config.onMenuOpen} key={route.name}>
        <Theme.Icons.Utility
          name="rows"
          style={styles.menuNavIcon}
          iconColor={iconColor} />
      </TouchableOpacity>
    )
  },
  RightButton (route, navigator, index, navState) {
    return null;
  },
  Title (route, navigator, index, navState) {
    return null;
  }

});
