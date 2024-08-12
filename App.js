import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentExpenses from './pages/RecentExpenses';
import AllExpenses from './pages/AllExpenses';
import ManageExpenses from './pages/ManageExpenses';
import Icons from './components/Icons';
import ExpenseContextProvider from './store/ExpenseContext';
export default function App() {
const Stack= createNativeStackNavigator();
const Bottom= createBottomTabNavigator();
const ExpenseOverview=()=>{
  return(
    <Bottom.Navigator screenOptions={({navigation})=>(
      {
        headerStyle:{backgroundColor:"#2b0097"},
        headerTintColor:"white",
        tabBarStyle:{backgroundColor:"#2b0097"},
        tabBarActiveTintColor:"#7b48fc",
        headerRight: ()=> <Icons name="add" size={30} onPress={()=>{navigation.navigate("ManageExpense")}}/>
      }
    )}>
    <Bottom.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title:"Recent Expenses",
      tabBarIcon: ()=> <Icons name='hourglass' size={24} /> 
    }}/>
    <Bottom.Screen name='AllExpenses' component={AllExpenses} options={{
      title:"All Expenses",
      tabBarIcon: ()=> <Icons name='calendar' size={24}/>,
    }}/>
   </Bottom.Navigator>
  )
}
  return (
    <ExpenseContextProvider>
    <NavigationContainer>
   <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:"#2b0097"},
    headerTintColor:"white",
   }} >
   <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={{headerShown:false}}/>
    <Stack.Screen name='ManageExpense' component={ManageExpenses} options={{presentation:"modal"}}/>
   </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
  );
}


