import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native'; // Doğru import
import HeaderMain from '../../components/HeaderMain';
import BannerCarousel from '../../components/BannerCarousel';
import MainCategories from '../../components/MainCategories';


export default function MainScreen() { // Daha açıklayıcı bir isim
  return (
    <SafeAreaView>
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'#f5f5f5'}}>
      <HeaderMain />
      <BannerCarousel />
    <MainCategories/>
    </ScrollView>
    </SafeAreaView>
  );
}
