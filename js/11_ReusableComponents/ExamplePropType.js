import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const textStyle = {
  color:'white',
  textAlign:'center'
}


export default class ExamplePropType extends PureComponent {

  static propTypes = {
    text: PropTypes.string,
    category: PropTypes.oneOf(['GOOD', 'GREAT']),
  };

  render() {
    return (
      <View style={{marginTop:30}}>
        <Text style={textStyle}>Example:</Text>
          <Text style={textStyle}> </Text>
        <Text style={textStyle}>text:</Text>
        <Text style={textStyle}>{ this.props.text }</Text>
        <Text style={textStyle}>category:</Text>
        <Text style={textStyle}>{ this.props.category }</Text>
      </View>
    )
  }

}
