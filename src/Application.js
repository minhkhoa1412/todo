import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import HomeScreen from './screens/Home/HomeScreen'

class Application extends Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Application