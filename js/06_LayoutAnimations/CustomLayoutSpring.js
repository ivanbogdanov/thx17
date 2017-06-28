import { LayoutAnimation } from 'react-native'

const CustomLayoutSpring = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 2.0,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.5,
  }
}

export default CustomLayoutSpring
