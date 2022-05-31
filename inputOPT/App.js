/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const pinRef1 = useRef(null);
  const pinRef2 = useRef(null);
  const pinRef3 = useRef(null);
  const pinRef4 = useRef(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [pin,setPin] = useState({
    pin1:'',
    pin2: "",
    pin3:"",
    pin4:""
  })
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        
        <View
          style={styles.mainContainer}>
            <TextInput ref={pinRef1} value={pin.pin1} onChangeText={(pin1) => { setPin({...pin,pin1:pin1});
              pin.pin1 !== "" ? pinRef1.current?.focus() : pinRef2.current?.focus() 
          } } keyboardType='phone-pad' style={styles.inputControl} maxLength={1} />
            <TextInput ref={pinRef2} value={pin.pin2} onChangeText={ (pin2) => {setPin({...pin,pin2:pin2})
            pin.pin2 !== "" ? pinRef2.current?.focus() : pinRef3.current?.focus() 
          }} keyboardType='phone-pad' style={styles.inputControl} maxLength={1} />
            <TextInput ref={pinRef3} value={pin.pin3} onChangeText={(pin3) => 
              {setPin({...pin,pin3:pin3})
              pin.pin3 !== "" ? pinRef3.current?.focus() : pinRef4.current?.focus()   
            }
            } keyboardType='phone-pad' style={styles.inputControl} maxLength={1} />
            <TextInput ref={pinRef4} value={pin.pin4} onChangeText={
              (pin4) => {
                setPin({...pin,pin4:pin4})
                pin.pin4 !== "" ? pinRef4.current?.focus() : pinRef4.current?.focus()
            }} keyboardType='phone-pad' style={styles.inputControl} maxLength={1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:'center',
    height : 400
  },
  inputControl:{
    width: 50,
    borderWidth: 3,
    borderColor : "green",
    textAlign:'center',
    borderRadius:10
  }
});

export default App;
