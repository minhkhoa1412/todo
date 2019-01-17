import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ActionButton from 'react-native-action-button';

import AHeader from '../../components/AHeader/AHeader'
import AUserInformation from '../../components/AUserInformation/AUserInformation'
import TabNavigator from '../../navigator/AppNavigator'
import {colors} from '../../vars/colors'


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <AHeader/>
        </View>
        <View>
          <AUserInformation
            username={'thái minh khoa'}
            email={'thaiminhkhoa1412@gmail.com'}
            url={'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/49783381_1032860776897619_948737981965926400_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn3-1.fna&oh=dd20f0f49b8828f4213a4d25d0c77827&oe=5CC42A86'}/>
        </View>
        <TabNavigator/>
        <ActionButton
          buttonColor={colors.colorAccent}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight()
  },
  header: {
    height: '6%'
  }
})

export default HomeScreen