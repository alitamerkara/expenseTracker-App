import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentExpenses from './pages/RecentExpenses';
import AllExpenses from './pages/AllExpenses';
import ManageExpenses from './pages/ManageExpenses';



export default function App() {
const Stack= createNativeStackNavigator();
const Bottom= createBottomTabNavigator()
const ExpenseOverview=()=>{
  return(
    <Bottom.Navigator>
    <Bottom.Screen name='RecentExpenses' component={RecentExpenses}/>
    <Bottom.Screen name='AllExpenses' component={AllExpenses}/>
   </Bottom.Navigator>
  )
}
  return (
    <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name='ExpenseOverview' component={ExpenseOverview}/>
    <Stack.Screen name='ManageExpense' component={ManageExpenses}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
}


