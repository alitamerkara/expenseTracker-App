import { FlatList, Text, StyleSheet, View, Pressable } from 'react-native'
import { dummyData } from './ExpensesOutput'
import { useNavigation } from '@react-navigation/native'

const ExpensesList = () => {
const editDates=(date)=>`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
const navigation= useNavigation()

const runExpenses=(dataItem)=>{
return(
<Pressable onPress={()=>{
    navigation.navigate("ManageExpense", {
        id: dataItem.item.id,
    })
}} style={({pressed})=>pressed && styles.pressed}>
    <View style={styles.card}>
    <Text style={styles.text} >{dataItem.item.name}</Text>
    <Text style={styles.text}>{editDates(dataItem.item.date)}</Text>
    <Text style={styles.amount}>$ {dataItem.item.amount}</Text>
    </View> 
</Pressable>
)}
  return (
    <FlatList data={dummyData} keyExtractor={item=>item.id} renderItem={runExpenses} />
  )
}
const styles= StyleSheet.create({
card:{
    margin:10,
    backgroundColor:"#986fff",
    paddingHorizontal:15,
    paddingVertical:6,
    position:"relative",
    borderRadius:8,
},
amount:{
    position:"absolute",
    top:10,
    right:5,
    backgroundColor:"#3900c8",
    color:"white",
    padding:6,
    borderRadius:8,
    overflow: 'hidden',
},
text:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
},
pressed:{
    opacity:0.75
}
})
export default ExpensesList