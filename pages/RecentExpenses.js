import { Text, View, StyleSheet } from "react-native"
import ExpensesList from "../components/ExpensesList"
import ExpensesOutput from "../components/ExpensesOutput"


const RecentExpenses = () => {
  return (
    <View style={styles.container}>
    <ExpensesOutput periodName="Last 7 Days"/>
    <ExpensesList/>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#9a72ff"
  }
})
export default RecentExpenses