import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native"
import Icons from "../components/Icons";
import CustomButton from "../components/CustomButton";



const ManageExpenses = ({route, navigation}) => {
const id= route.params?.id;
const checkId= !!id;
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: checkId? "Edit the Expense" : "Add a Expense"
    })
},[navigation, checkId])
const cancelPress=()=>{navigation.goBack();};
const confirmPress=()=>{navigation.goBack();};
  return (
    <View style={styles.container}>
      {checkId ? (
        <View>
          <View style={styles.buttons}>
        <CustomButton onPress={cancelPress}>Cancel</CustomButton>
        <CustomButton onPress={confirmPress}>Confirm</CustomButton>
        </View>
        <View style={styles.deleteItem}>
          <Icons name="trash" size={36} color="brown"/>
        </View>
        </View>
      ):null}
    </View>
  )
}
const styles= StyleSheet.create({
container:{
flex:1,
backgroundColor:"#190059",
width:"100%"
},
deleteItem:{
width:"90%",
marginHorizontal:20,
borderTopWidth: 2,
borderTopColor: "#9f79ff",
alignItems:"center",
padding:15,
},
buttons:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  gap:10,
  margin:20
}
})
export default ManageExpenses