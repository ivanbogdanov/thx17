import React, { Component } from 'react';
import { StatusBar, Button } from 'react-native';
import SideMenu from 'react-native-side-menu'
import { StackNavigator } from 'react-navigation'


import MainMenu from './MainMenu';

import Why_React_Native from './01_Why_React_Native';
import Some_Native_Apps_Are_Great from './02_Some_Native_Apps_Are_Great';
import Most_Native_Apps_Suck from './03_Most_Native_Apps_Suck';
import Mobile_Is_Expensive from './04_Mobile_Is_Expensive';
import Productivity_And_Performance from './05_Productivity_And_Performance';
import Not_Another_Hybrid from './06_Not_Another_Hybrid';
import Efficient_Rerender from './07_Efficient_Rerender';
import Native_Views from './08_Native_Views';
import Declarative_Components from './09_Declarative_Components';
import Styles from './10_Styles';
import Layouts from './11_Layouts';
import Tools from './12_Tools';
import Reusable_Components from './14_Reusable_Components';
import MobileSDK from './15_MobileSDK';
import SampleApps from './16_SampleApps';
import LetsBuild from './17_LetsBuild';

import { NavigationBarMapper } from './NavBar';

import routes from './routes';

import styles from './styles';


const handleNext = () => {
  alert('YES!')
//  let nextRoute = (route && route.name)?this._getNextRoute(route.name):routes[0];
//  this.refs.nav.replace(nextRoute);
}

const routez = {
  Why_React_Native: { screen: Why_React_Native, onNext:handleNext },
  Some_Native_Apps_Are_Great: { screen: Some_Native_Apps_Are_Great },
}

const Nav = StackNavigator(routez)

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
/*
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  componentDidMount() {
   StatusBar.setBarStyle('light-content', true);
  }

  _handleMenuPress(routeName) {
    this.setState({isOpen:false});
    const route = this._getRoute(routeName);
    this.refs.nav.replace(route)
  }

  _getRoute(routeName) {
    return routes.find(route => route.name === routeName);
  }

  _getNextRoute(routeName) {
    let index = routes.findIndex(route => route.name === routeName);
    let nextIndex = index+1;
    if(nextIndex >= routes.length){
      nextIndex = 0;
    }
    return routes[nextIndex];
  }

  _handleNext(route) {
    let nextRoute = (route && route.name)?this._getNextRoute(route.name):routes[0];
    this.refs.nav.replace(nextRoute);
  }

  _handleMenuOpen() {
    this.setState({isOpen:true});
  }

  _renderScene(route, navigator)  {
    switch (route.name) {
      case 'Some_Native_Apps_Are_Great':
        return <Some_Native_Apps_Are_Great route={route} onNext={this._handleNext.bind(this)} />
      case 'Most_Native_Apps_Suck':
        return <Most_Native_Apps_Suck route={route} onNext={this._handleNext.bind(this)} />
      case 'Mobile_Is_Expensive':
        return <Mobile_Is_Expensive route={route} onNext={this._handleNext.bind(this)} />
      case 'Productivity_And_Performance':
        return <Productivity_And_Performance route={route} onNext={this._handleNext.bind(this)} />
      case 'Not_Another_Hybrid':
        return <Not_Another_Hybrid route={route} onNext={this._handleNext.bind(this)} />
      case 'Efficient_Rerender':
        return <Efficient_Rerender route={route} onNext={this._handleNext.bind(this)} />
      case 'Native_Views':
        return <Native_Views route={route} onNext={this._handleNext.bind(this)} />
      case 'Declarative_Components':
        return <Declarative_Components route={route} onNext={this._handleNext.bind(this)} />
      case 'Styles':
        return <Styles route={route} onNext={this._handleNext.bind(this)} />
      case 'Layouts':
        return <Layouts route={route} onNext={this._handleNext.bind(this)} />
      case 'Tools':
        return <Tools route={route} onNext={this._handleNext.bind(this)} />
      case 'Reusable_Components':
        return <Reusable_Components route={route} onNext={this._handleNext.bind(this)} />
      case 'MobileSDK':
        return <MobileSDK route={route} onNext={this._handleNext.bind(this)} />
      case 'SampleApps':
        return <SampleApps route={route} onNext={this._handleNext.bind(this)} />
      case 'LetsBuild':
        return <LetsBuild route={route} onNext={this._handleNext.bind(this)} />
      default:
        return <Why_React_Native route={route} onNext={this._handleNext.bind(this)} />
    }
  }

  render() {
    const route =   {
        name:'Why_React_Native',
        label:'Why React Native?',
        icon:{type:'Utility',name:'topic'}
      }
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this._handleMenuPress.bind(this)} />}>

        <Some_Native_Apps_Are_Great route={route} onNext={this._handleNext.bind(this)} />
      </SideMenu>
    );
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }
  componentDidMount() {
   StatusBar.setBarStyle('light-content', true);
  }
  _handleMenuPress(routeName) {
    alert(routeName)
//    this.setState({isOpen:false});
//    const route = this._getRoute(routeName);
//    this.refs.nav.replace(route)
  }
  render() {
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this._handleMenuPress.bind(this)} />}>

        <Nav />
      </SideMenu>
    );
  }
}

export default App
