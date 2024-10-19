import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const {height, width} = Dimensions.get('window');

const TypeBox = ({item, active, setCat} : {item:string, active:string, setCat:any}) =>{
    return(
        <TouchableOpacity onPress={() =>setCat(item)}  style={[{paddingHorizontal:10, marginRight:12, flexDirection:'row', alignItems:'center', borderRadius:6, height:height * 0.044}, item == active ? {backgroundColor:'#5C3EBC',} : {borderColor:'#f0eff7', borderWidth:1}]}>
            <Text style={[
    { fontSize: 12, color: '#7849F7', fontWeight: '600' },
    item == active && { color: 'white' }
]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default function index() {

    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
  return (
   <ScrollView style={{ borderBottomWidth:2, borderBottomColor:'lightgrey', width:'100%', backgroundColor:'white', height: height * 0.072, flexDirection:'row',paddingVertical:height *0.014, paddingHorizontal:12}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
    {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item) => (
       <TypeBox setCat={setCategory} item={item} active={category}/>
    ))}
   </ScrollView>
  )
}