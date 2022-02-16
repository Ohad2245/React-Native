import React, { useEffect, useState } from 'react';
import {
    Text,
     View , 
     StatusBar,
     ScrollView,
     TouchableOpacity , Image ,ImageBackground} from 'react-native';
import { Items} from '../database/Database';
import { COLORS } from '../assets/Style';
import styles from '../assets/Style';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import backNike2 from '../assets/images/backNike2.png';
import nike from '../assets/images/nike2.png';

const LifeStyle = ({navigation}) =>{
   
    const [product,setProduct] = useState([]);
    const [accessory , setAccessory] = useState([]);
    const [children , setChildren] = useState([]);
    
    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus',()=>{
            getDataFromDB()
        });

        return unsubscribe;
    },[navigation])

    // get data from DB

    const getDataFromDB = () =>{
        let productList = []
        let accessoryList = []
        let childrenList = [];
        
        for (let index = 0; index < Items.length; index++) {
            if(Items[index].category == "product"){
                productList.push(Items[index])
            }else if(Items[index].category == "accessory"){
                accessoryList.push(Items[index]);
            }else if(Items[index].category == "children"){
                childrenList.push(Items[index]);   
            }  
        }

        setProduct(productList);
        setAccessory(accessoryList);
        setChildren(childrenList);
    };
    
    // create an product reusable card

     const ProductCard = ({data}) => {
         return (
            
            <TouchableOpacity
            onPress={()=> navigation.navigate("ProductInfo",{productID:data.id})}
            style={styles.ProductCardTouchableOpacity}>
                <View 
                style={styles.productContainer}>
                    {data.isOff ? (
                        <View style={styles.OffPrecentage}>
                            <Text style={styles.offPrecentageText}>
                            {data.offPercentage}%
                            </Text>
                            </View>
                    ) : null }
                    <Image 
                    source={data.productImage} 
                    style={styles.productImage}/>
             </View>
             <Text style={styles.shoeTitle}>
                 {data.productName}
             </Text>
              {data.category == "accessory" ? (
                  data.isAvailable ?(
                  <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                  }}>
                      <FontAwesome name="circle" style={styles.greenCircle} />
                    <Text style={styles.available}>
                        Available
                    </Text> 
                  </View>
                ):(
                <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                  }}>
                      <FontAwesome name="circle" style={styles.greenCircle}/>
                    <Text style={styles.unvailable}>
                        Unvailable
                    </Text> 
                  </View>
                )
              ): null}
              <Text> {data.productPrice}$ </Text>
             
            </TouchableOpacity>
            
        )
    };

    return(
        <ImageBackground source={nike} resizeMode="contain" style={styles.backGround}
        style ={{
            width:'100%',
            height: '100%',
            backgroundColor:COLORS.white,
        }}>
            <StatusBar backgroundColor={COLORS.white} barStyle='dark-content'/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    width:'100%',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:16,
                }}>

                    <TouchableOpacity>
                        <Entypo 
                        name='shopping-bag' 
                        style={{
                            fontSize:18,
                            color:COLORS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            backgroundColor:COLORS.backgrondLight,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('MyCart')}>
                        <MaterialCommunityIcons
                            name= "cart"
                            style={{
                                fontSize:18,
                                color:COLORS.backgroundMedium,
                                padding:12,
                                borderRadius:10,
                                borderWidth:1,
                                borderColor:COLORS.backgrondLight,
                            }}
                        />    
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginBottom:10,
                        padding:16,
                    }}>
                        <Text
                         style={{
                             fontSize:26,
                             color:"black",
                             fontWeight:'300',
                             letterSpacing:7,
                             marginBottom:10,
                             fontFamily:'DancingScript-Regular',

                         }}>
                         Welcome to Nike Store 
                        </Text>
                        <Text
                         style={{
                             fontSize:14,
                             color:COLORS.black,
                             fontWeight:'100',
                             letterSpacing:3,
                             marginBottom:10,
                             lineHeight:24,
                             fontFamily:'DancingScript-Regular',
                         }}>
                        Store brands of David Shoval and Ohad
                        {'\n'}This shop offers both products and services
                        </Text>
                     </View>


                      <View 
                        style={{
                            padding: 16,
                    }}>
                        <View  
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-around',
                    }}>

                    <View 
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                    }}>
                        <Text style={{
                            fontSize : 18,
                            color:COLORS.black,
                            fontWeight:'150',
                            letterSpacing:1,
                        }}>
                            LifeStyle
                            </Text>
                        <Text style={{
                            fontSize : 10,
                            color:COLORS.black,
                            fontWeight:'400',
                            opacity:0.5,
                            
                        }}> 4</Text>
                        </View>
                    <Text style={{
                        fontSize:14,
                        color:'gray',
                        fontWeight:'200',
                       }}>
                        SeeAll 
                      </Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        flexWrap:'wrap',
                        justifyContent:'space-around',
                        
                    }}>
                        {product.map((data)=>{
                            return <ProductCard data={data} key = {data.id}/>;
                        })}
                    </View>
                    </View>
            </ScrollView>
         </ImageBackground>
    );
    
};

export default LifeStyle;