import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {AAvatar} from '../AAvatar/AAvatar'
import {colors} from '../../vars/colors'


class AUserInformation extends Component {
  render() {
    const {url, username, email} = this.props

    return (
      <View style={styles.container}>
        <AAvatar
          size={70}
          url={url}/>
          <View style={styles.information}>
            <Text style={styles.textUsername}>{username.toUpperCase()}</Text>
            <View style={styles.viewTextEmail}>
              <Text style={styles.textEmail}>{email}</Text>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textUsername: {
    color: colors.colorTextTitle,
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewTextEmail: {
    backgroundColor: colors.colorAccentLighter,
    padding: 4,
    marginTop: 5,
    borderRadius: 3
  },
  textEmail: {
    color: colors.colorTextEmail
  }
})

export default AUserInformation