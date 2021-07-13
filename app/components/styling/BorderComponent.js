import React from 'react';
import { View ,StyleSheet} from 'react-native';

export function BorderComponent(props) {
    return (

    <View style={styles.container}>
       <View style={styles.border}>

       </View>
       

       </View>
    );
    }

    const styles = StyleSheet.create({
        border:{
            backgroundColor:'dodgerblue',
            width:100,
            height:100,
            borderWidth:10,
            borderColor:'royalblue',
            borderRadius:10,
            borderTopWidth:20,
            borderTopLeftRadius:50,

        },
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    })