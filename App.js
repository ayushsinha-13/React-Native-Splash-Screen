import { StyleSheet,View, Text } from 'react-native'
import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  })
  
  return (
    <View>
      <Text style={styles.Title}>App Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Title:{
    color: "#000000",
    fontSize: 40,
    fontWeight: "900",
    alignSelf: "center",
    marginTop: 20,
  }
})

export default App