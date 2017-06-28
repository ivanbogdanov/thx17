import ProductivityAndPerformance from './01_ProductivityAndPerformance'
import Bridge from './02_Bridge'
import NativeOrJS from './03_NativeOrJS'
import CustomNativeViews from './04_CustomNaviteViews'
import AnimatedLibrary from './05_AnimatedLibrary'
import LayoutAnimations from './06_LayoutAnimations'
import PlatformSpecific from './07_PlatformSpecific'
import Icons from './08_Icons'
import DataAndState from './09_DataAndState'
import Redux from './10_Redux'
import ReusableComponents from './11_ReusableComponents'
import LetsBuild from './12_LetsBuild'

export function getNext (currentRouteName) {
  const keys = Object.keys(routes)
  const currentIndex = keys.indexOf(currentRouteName)
  const nextRouteIndex = (currentIndex>-1 && currentIndex+1<keys.length)?currentIndex+1:0
  const nextRouteName = keys[nextRouteIndex]
  return {
    nextRouteName:nextRouteName,
    nextRouteComponent:routes[nextRouteName].screen
  }
}

const routes = {
  ProductivityAndPerformance: {
    screen: ProductivityAndPerformance,
  },
  Bridge: {
    screen: Bridge
  },
  NativeOrJS: {
    screen: NativeOrJS,
  },
  CustomNativeViews: {
    screen: CustomNativeViews,
  },
  AnimatedLibrary: {
    screen: AnimatedLibrary
  },
  LayoutAnimations: {
    screen: LayoutAnimations,
  },
  PlatformSpecific: {
    screen: PlatformSpecific,
  },
  Icons: {
    screen: Icons,
  },
  DataAndState: {
    screen: DataAndState,
  },
  Redux: {
    screen: Redux,
  },
  ReusableComponents: {
    screen: ReusableComponents
  },
  LetsBuild: {
    screen: LetsBuild,
  }
}

export default routes
