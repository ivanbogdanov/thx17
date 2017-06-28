import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1589ee',
  },
  item:{
    backgroundColor:'white',
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:5,
    margin:10
  },
  itemLabel: {
    textAlign:'center',
    fontSize:32,
    fontFamily: 'SalesforceSans-Light',
  },
  icon: {
    width: 24,
    height: 24,
  },
  mainIconContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  mainIcon: {
    marginTop:50,
    width: 80,
    height: 80,
  }
})

export default styles
