import { View, Text, Image, TouchableOpacity, Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import { connect } from 'react-redux';
import cartItems from '../redux/reducers/cartItem';
import * as actions from "../redux/actions/cartActions";


const{width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

function MyStack({navigation, route, cartItems, clearCart}: {cartItems:{product:Product, quantity:number}[], clearCart:()=> void}) {
    
  const[totalPrice, setTotalPrice] = useState<number>(0)

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log("Route Name is ", routeName);
        if (tabHiddenRoutes.includes(routeName)) {
          console.log("Kapat ", routeName);
          navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
          console.log("Aç ", routeName);
          navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
      }, [navigation, route]);
      const navigation_user = useNavigation();
    
      const getProductsPrice= () => {
        var total =0;
        cartItems.forEach(product => {
            const price = (total += product.product.fiyat);
            setTotalPrice(price)
        })
      }

      useEffect(() => {
        getProductsPrice()
        
        return (() => {
            setTotalPrice(0)
        })
      },[navigation, route, cartItems])
  return (
   <Stack.Navigator>
    <Stack.Screen 
    name='Home'
     component={HomeScreen} 
    options={{
        headerStyle:{
            backgroundColor:"#5c3ebc"
        },
        headerTitle: () => (
            <Image source={require('../../assets/getirlogo.png')}
            style={{width:70, height:30}}
            />
        )
    }}/>
    <Stack.Screen 
    name='CategoryDetails'
     component={CategoryFilterScreen} 
    options={{
        headerTintColor:'white',
        headerBackTitleVisible:false, 
        headerStyle:{
            backgroundColor:"#5c3ebc"
        },
        headerTitle: () => (
           <Text style={{fontWeight:'bold', fontSize:14, color:"white"}}>Ürünler</Text>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{
                width: width *0.22,
                 height:33, 
                 backgroundColor:'white',
                 marginRight:width * 0.03,
                 borderRadius:9,
                 flexDirection:'row',
                 alignItems:'center'}}>
                <Image style={{width:23, height:23,marginLeft:6}} source={require('../../assets/cart.png')}/>
                <View style={{height:33, width:4, backgroundColor:'white'}}/>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', height:33, backgroundColor:'#F3EFFE', borderTopRightRadius:9, borderBottomRightRadius:9}}>
                    <Text style={{color:'#5c3ebc', fontWeight:"bold", fontSize:12}}>
                       <Text> {"\u20BA"}</Text>
                      {totalPrice.toFixed(2)}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }}/>
    <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} 
    options={{
        headerBackTitleVisible:false,
        headerTintColor:'white',
        headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}
             style={{paddingLeft:12}}>
                <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
        ),
        headerStyle:{backgroundColor:'#5C3EBC'},
        headerTitle:() => (
            <Text style={{fontWeight:'bold', color:'white', fontSize:15}}>
               Ürün Detayi 
            </Text>
        ),
        headerRight:() => (
            <TouchableOpacity style={{paddingRight:12}}>
                <FontAwesome name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
        )    }}/>
        <Stack.Screen
         name={"CartScreen"} 
         component={CartScreen}
         options={{
            headerTintColor:'white',
            headerBackTitleVisible:false,
            headerStyle:{backgroundColor:"#5C3EBC"},
            headerTitle:() =>(
                <Text style={{fontWeight:"bold", fontSize:15, color:'white'}}>
                    Sepetim
                </Text>
            )  ,
            headerLeft:()=>(
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.goBack()}>
                     <Ionicons name="close" size={26} color="white" />
                </TouchableOpacity>
            ) ,
            headerRight: () => (
                <TouchableOpacity onPress={() => clearCart()} style={{paddingRight:10}}>
                    <Ionicons name="trash" size={24} color="white" />
                </TouchableOpacity>
            )
             }}/>
   </Stack.Navigator>
  )
}
const mapStateToProps= (state) => {
    const{cartItems} = state;
    return{
        cartItems:cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: () => dispatch(actions.clearCart())
    }
}

 function HomeNavigator({navigation, route, cartItems, clearCart}:{clearCart:() => void}){
    return <MyStack navigation= {navigation} route={route} cartItems={cartItems} clearCart={clearCart}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)