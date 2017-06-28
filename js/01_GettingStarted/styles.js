import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1589ee',
  },
  wrapper:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  titleContainer: {
    paddingTop:50,
    paddingBottom:50,
  },
  title: {
    textAlign:'center',
    fontSize:24,
    color:'white'
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
