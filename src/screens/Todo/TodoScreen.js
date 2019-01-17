import React,{Component} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

import {colors} from '../../vars/colors'
import Item from './Components/Item'

class TodoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataDemo: [
        {
          taskId: '1',
          taskName: 'Section 2',
          taskDate: Date.now(),
          taskDone: false
        },
        {
          taskId: '2',
          taskName: 'Section 3',
          taskDate: Date.now(),
          taskDone: true
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeline}/>
        <FlatList
          keyExtractor={(item) => item.taskId}
          style={styles.list}
          data={this.state.dataDemo}
          renderItem={({item}) => (
            <Item
              item={item}
            />
          )}
        />
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBackground
  },
  list: {
    position: 'absolute'
  },
  timeline: {
    height: '100%',
    width: 1,
    backgroundColor: colors.colorTimeline,
    marginLeft: 32
  }
})

export default TodoScreen