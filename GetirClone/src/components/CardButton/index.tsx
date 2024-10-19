import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/cartActions'
import { Product } from '../../models';

const {width, height} = Dimensions.get('window');

type cartButtonType = {
  addItemToCart:(a:Product) => void;
  item:Product;
}

 function index({item, addItemToCart}: cartButtonType) {
  return (
    <TouchableOpacity onPress={() => addItemToCart(item)} style={{justifyContent:'center', width:'100%', height:height * 0.12, backgroundColor: "white", position:'absolute', bottom:0}}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            height: height * 0.06, 
            width:"90%", 
            backgroundColor:"#5d39c1",
             marginHorizontal:'5%',
             borderRadius:8}}>
        <Text style={{fontWeight:'bold', color:'white', fontSize:14}}>Sepete Ekle</Text>
        </View>
      
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart :(product:Product) =>
      dispatch(actions.addToCart({quantity:1, product}))
  }
}

export default connect (null, mapDispatchToProps)(index);