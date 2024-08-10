import { Ionicons } from '@expo/vector-icons'
import { Pressable, View, StyleSheet } from 'react-native'


const Icons = ({name,onPress, size}) => {
  return (
    <View style={styles.icon}>
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <Ionicons name={name} color="white" size={size}/>
        </Pressable>
    </View>
  )
}
const styles= StyleSheet.create({
    icon:{
        marginRight:10,
    },
    pressed:{
        opacity:0.75
    }
})
export default Icons