import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CardButton from '../../components/CardButton';

export default function ProductDetails(props) {  // Bileşen adı büyük harf ile başladı

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (props.route && props.route.params && props.route.params.product) {
        setProduct(props.route.params.product);
    }
  }, [props.route.params.product]);  // Bağımlılık eklendi
  
  if(!product) {
    return <ActivityIndicator size="large" color={'#5D3EBD'} />  // Boyut eklendi
  }
  
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
        <Text style={{paddingHorizontal:10, paddingVertical:15, color:'#808b99', fontWeight:'600'}}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product}/>
    </View>
  )
}
