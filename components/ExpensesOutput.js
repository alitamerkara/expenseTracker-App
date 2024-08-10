import { View, Text, StyleSheet } from 'react-native'
import ExpensesList from './ExpensesList'

export const dummyData=[{
  id:"e1",
  name: "Book",
  amount: 18.24,
  date: new Date("2024-07-11")
},
{
  id:"e2",
  name: "Phone",
  amount: 999.22,
  date: new Date("2023-05-13")
},
{
  id:"e3",
  name: "Purse",
  amount: 38.24,
  date: new Date("2022-09-22")
},
{
  id:"e4",
  name: "Watch",
  amount: 99.15,
  date: new Date("2024-08-03")
},
{
  id:"e5",
  name: "Mouse",
  amount: 25.24,
  date: new Date("2024-08-10")
},
]
let total=0;

const ExpensesOutput = ({periodName}) => {
const expenseSum= dummyData.reduce((sum,expense)=>(sum+expense.amount),0)
  return (
    <View style={styles.view}>
        <View style={styles.container}>
        <Text>{periodName}</Text>
        <Text>${expenseSum.toFixed(2)}</Text>
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
    backgroundColor:"#cdb9ff",
    padding:10,
    borderRadius:10,
    marginVertical:10
  },
  view:{
    alignItems:"center"
  }
})
export default ExpensesOutput