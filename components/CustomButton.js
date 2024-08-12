import React from 'react'
import { View,Text,StyleSheet, Pressable } from 'react-native'

const CustonButton = ({children, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}
const styles= StyleSheet.create({
 container:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor: "#2b0097",
    borderRadius:10,
    overflow:"hidden"
 },
 text:{
    color:"white",
    textAlign:"center"
 },
 pressed:{
  opacity:0.5
 }
})
export default CustonButton