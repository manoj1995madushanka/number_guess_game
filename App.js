import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')}
        resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgraoundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    //backgroundColor:'#ddb52f',
    flex: 1,
  },
  backgraoundImage:{
    opacity:0.15,
  }
});
