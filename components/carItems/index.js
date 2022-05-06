import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './styles';
import StyleButton from '../StyleButton';
const CarItem=(props)=>{

   const {name,unitPrice,specialPrice,image}=props.car;//aynı şey const name=props.name;
   
    return(
        <View style={styles.carCointainer}>

        <ImageBackground
        source={image}
        style={styles.image}
        />
        <View style={styles.titles}>
        <Text style={styles.mainTitle}>{name}</Text>
        <Text style={styles.subTitle}>{unitPrice}{' '}<Text style={styles.special}>{specialPrice}</Text></Text>
        </View>

        <View style={styles.buttonComp}>

            <StyleButton type="primary"
        content={"Custom Order"}
        onPress={()=>{
            console.warn("buraya basildi.");
        }}
            />
            

        <StyleButton type="secondary"
        content={"Existing Inventory"}
        onPress={()=>{
            console.warn(" secondary buraya basildi.");
        }}
            />    
        </View>
        
      </View>
    );
};
export default CarItem;