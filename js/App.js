import { StatusBar } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import routes from './routes'

StatusBar.setBarStyle('light-content', true)

const MyApp = DrawerNavigator(routes);

export default MyApp
