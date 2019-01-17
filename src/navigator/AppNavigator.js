import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import TodoScreen from '../screens/Todo/TodoScreen'
import TodoDoneScreen from '../screens/TodoDoneScreen/TodoDoneScreen'
import {colors} from '../vars/colors'


const TabNavigator = createMaterialTopTabNavigator(
  {
    Todo: {
      screen: TodoScreen,
      navigationOptions: {
        title: 'To-do'
      }
    },
    Done: TodoDoneScreen
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: colors.colorAccent,
      inactiveTintColor: colors.colorTextTitle,
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      indicatorStyle: {
        backgroundColor: colors.colorAccent,
        height: 4,
      },
      style: {
        backgroundColor: 'white',
      },
    }
  }
)

export default createAppContainer(TabNavigator)