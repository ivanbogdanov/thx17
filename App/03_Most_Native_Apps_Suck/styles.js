import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e8c99',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  code: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'SalesforceSans-Regular',
    color:'white'
  },
  codeText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  iconContainer:{
    marginTop:30,
    flex:0
  },
  icon:{
    width:80,
    height:80,
    transform:[{rotate: '180deg'}]
  },
  codeContainer:{
    marginTop:30,
    flex:0
  },
  strong: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Bold',
  },
});

export default styles;
