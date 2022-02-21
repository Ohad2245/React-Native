import { Dimensions, StyleSheet } from "react-native";

export const COLORS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgrondLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
}
export default StyleSheet.create({
    ProductCardTouchableOpacity: {
        width:'48%',
        marginVertical:14,
    },
    productContainer: {
        width:'100%',
        height:100,
        borderRadius:10,
        backgroundColor: 'whitesmoke',
        // backgroundColor:COLORS.backgrondLight,
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:8,
        
    },
    OffPrecentage: {
        position:'absolute',
        width:'20%',
        height:'24%',
        backgroundColor:COLORS.green,
        top:0,
        left:0,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    offPrecentageText: {
        fontSize:12,
        color:COLORS.white,
        fontWeight:'bold',
        letterSpacing:1,
    },
    productImage: {
        width:'80%',
        height:'80%',
        resizeMode:'contain',
    },
    shoeTitle: {
        fontSize:12,
        color:COLORS.black,
        fontWeight:'600',
        marginBottom:2,
    },
    greenCircle: {
        fontSize:12,
        marginRight:6,
        color:COLORS.green,
    },
    available: {
        fontSize:12,
        color:COLORS.green,
    },
    unvailable: {
        fontSize:12,
        marginRight:6,
        color:COLORS.red,
    },
    input: {
        borderWidth:1,
        borderColor:COLORS.backgrondLight,
        padding:8,
        margin:10,
        width:150,
        borderRadius:25, 
    },
    backGround:{
        width: '100%', 
        height: '100%',
       
    },
    categories:{
        letterSpacing:5,
        fontSize:12,
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:40,
        paddingHorizontal:20,
    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
        marginHorizontal:10,
        marginTop:24,
    },
    image:{
        height:250,
        width:180,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:2,
        padding:2,
        
        // height:(Dimensions.get('window').height/3) -12,
        // width:(Dimensions.get('window').width/2) -4,


    }
 
})