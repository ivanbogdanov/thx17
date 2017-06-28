import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7f93f9',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  iconCont:{
    marginTop:50
  },
  icon:{
    width:80,
    height:80
  },
  code: {
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'SalesforceSans-Regular',
    color:'white'
  },
  codeContainer: {
    marginTop:30
  },
  codeText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginBottom:30,
    fontFamily: 'SalesforceSans-Regular',
    color:'white'
  },
});

export default styles;
