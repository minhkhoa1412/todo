import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import {colors} from '../../vars/colors'


class AHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icons name='ios-arrow-back' size={30} color={colors.colorAccent}/>
        <Text style={styles.textHeader}>To Do</Text>
        <Icons name='ios-more' size={30} color={colors.colorAccent}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  textHeader: {
    color: colors.colorAccent,
    fontSize: 19,
  }
})

export default AHeader