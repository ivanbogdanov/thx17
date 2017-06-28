import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1589ee',
    paddingTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  nextButtonContainer: {
    flex:0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  iconContainer:{
    width:82,
    height:82,
    marginTop:60,
  },
  icon:{
    width:70,
    height:70
  },
  strong: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Bold',
    color:'white'
  }
});

export default styles;
