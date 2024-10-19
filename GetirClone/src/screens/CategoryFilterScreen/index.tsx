import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import ProductContainer from "../../components/ProductContainer";
import React, { useState } from 'react'
import { ScrollView } from 'react-native';


export default function index(props) {

    const [category, setCategory] = useState(props.route.params.category)
  return (
    <ScrollView>
        <CategoryFiltering category={category}/>
        <TypeFiltering/>
        <ProductContainer/>
    </ScrollView>
  )
}