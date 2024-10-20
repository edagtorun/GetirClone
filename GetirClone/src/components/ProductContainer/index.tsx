import { View, Text } from 'react-native'
import React from 'react'
import ProductItem from "../ProductItem";
import productsGetir from '../../../assets/productsGetir';
import styles from '../../screens/HomeScreen/styles';

export default function index() {
  return (
    <View>
      <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
   {productsGetir.slice(0,2).map((item) =>(
         <ProductItem key={item.id} item={item}/>
   ))}
      </View>
      <Text style={{color:'gray', fontWeight:'bold', padding:14}}>Cubuk </Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', flex:1, backgroundColor:'white', paddingVertical:10, alignItems:'center'}}> 
       {productsGetir.slice(2).map((item) => (
        <ProductItem key={item.id} item={item}/>
       ))}
      </View>
    </View>
  )
}