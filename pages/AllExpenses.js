import { Text, View, StyleSheet } from "react-native"
import ExpensesList from "../components/ExpensesList"
import ExpensesOutput from "../components/ExpensesOutput"


const AllExpenses = () => {
  return (
    <View style={styles.container}>
    <ExpensesOutput periodName="Total"/>
    <ExpensesList />
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#190059"
  }
})
export default AllExpenses