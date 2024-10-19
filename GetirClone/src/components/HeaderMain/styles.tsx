import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain:{
    height: height * 0.064,
    backgroundColor:"#F7D102"
  },
  headerOne:{
    backgroundColor:'white',
    width:"80%",
    height: height * 0.064,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'3%',
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
  },
  image:{
    width:30,
    height:30
  },
  headerOneView:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:8,
    borderLeftColor:'#F3F2FD',
    borderLeftWidth:2,
    paddingLeft:8,
  },
  headerTwo:{
    width:'20%',
    height: height * 0.064,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
  }

})

export default styles;