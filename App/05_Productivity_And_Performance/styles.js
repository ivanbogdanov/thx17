import {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a3c',
  },
  titleCont: {
    backgroundColor: 'transparent',
    padding:3,
    paddingLeft:16,
    paddingRight:16,
    borderRadius:8,
    borderColor:'transparent',
    borderWidth:2,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'SalesforceSans-Regular',
    color:'white',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 46,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'SalesforceSans-Light',
    color:'white'
  },
  textAnd: {
    fontSize: 26,
    textAlign: 'center',
    margin: 0,
    fontFamily: 'SalesforceSans-Bold',
    color:'white'
  },
  iconCont:{
    marginTop:60,
    padding:4,
    borderRadius:8,
    backgroundColor:'white'
  },
  icon:{
    width:50,
    height:50
  },
  code: {
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'SalesforceSans-Regular',
    color:'white'
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
