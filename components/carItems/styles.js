import { StyleSheet,Dimensions } from "react-native";
const styles=StyleSheet.create({

  
      carCointainer:{
        width:'100%',
        height: Dimensions.get('window').height,
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
    
      },
      mainTitle:{
        fontSize:40,
        fontWeight:'500',
      },
      subTitle:{
        fontSize:16,
        color:'#5c5e63'
      },
      special:{
        textDecorationLine:'underline',

      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',//burası fotoğrafı arkya alıyor yazıları öne çekiyor. 
      },
      buttonComp:{
        position:'absolute',
        width:'100%',
        bottom:50,

      }
    
});
export default styles;