import { View, Text } from 'react-native'
import React from 'react'

type DetailBoxProps={
    price:number;
    name:string;
    quantity:string;
}


export default function index({price, name, quantity}:DetailBoxProps) {
  return (
    <View style={{width:'100%',  backgroundColor:'white', alignItems:'center',}}> 
      <Text style={{color:'#5D3EBD', fontWeight:'bold', marginTop:12, fontSize:20}}>
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{fontWeight:'600', fontSize:16, marginTop:14}}>
        {name}
      </Text>
      <Text style={{fontWeight:'600', color:'#848897', marginTop:6, paddingBottom:20}}>
        {quantity}
      </Text>
    </View>
  )
}