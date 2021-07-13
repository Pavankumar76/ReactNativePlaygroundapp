import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';

export function DeviceOrientationComponent(){

    const orientation=useDeviceOrientation();
    return (
        <View style={styles.container}>
          <View style={{
            backgroundColor:'dodgerblue',
            width:'100%',
            height:orientation.landscape?'100%':'30%',
          }}
          >
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop:50,
      },
    });
    
