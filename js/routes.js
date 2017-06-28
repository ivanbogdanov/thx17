import ProductivityAndPerformance from './01_ProductivityAndPerformance'
import Bridge from './02_Bridge'
import NativeOrJS from './03_NativeOrJS'
import CustomNativeViews from './04_CustomNaviteViews'
import AnimatedLibrary from './05_AnimatedLibrary'
import LayoutAnimations from './02_LayoutAnimations'

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
}

export default routes
