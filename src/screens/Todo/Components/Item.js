import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {colors} from '../../../vars/colors'
import {metrics} from '../../../vars/metrics'


class Item extends Component {
  componentDidMount(): void {
    console.log(this.props.item)
  }

  render() {
    const {item} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.containDot}>
          <View style={styles.dot}>
            <View
              style={[
                styles.dotInner,
                {backgroundColor: item.taskDone ? colors.colorDotComplete : colors.colorDotNotComplete}
              ]}
            />
          </View>
        </View>

        <View style={styles.containTask}>
          <View style={styles.information}>
            <Text>{item.taskName}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: metrics.screen_width
  },
  dot: {
    shadowColor: colors.colorShadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 25,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotInner: {
    backgroundColor: colors.colorBlack,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  containDot: {
    backgroundColor: 'transparent'
  },
  containTask: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    paddingRight: 20,
    paddingVertical: 20
  },
  information: {
    shadowColor: colors.colorShadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row'
  }
})

export default Item
