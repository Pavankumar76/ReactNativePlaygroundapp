import React from "react";
import { Text,View, StyleSheet } from "react-native";
export function TextStyleComponent(props)
{
    return(
        <View style={styles.container}>
            <Text style={styles.textContent}>I love react!!! This is react native app 
            here is some more text for you</Text>
        </View>
    );

}
const styles= StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:20

        },
        textContent:{
            fontSize:30,
            fontFamily:'Roboto',
            fontStyle:"italic",
            fontWeight:'600',
            color:'tomato',
            textTransform:'capitalize',
            textAlign:'center',
            lineHeight:40
            

        }
    }
)