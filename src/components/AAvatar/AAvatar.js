import * as React from 'react'
import {View, Image, StyleSheet} from 'react-native'

export const AAvatar = ({url, size}) => {
  return (
    <Image
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size/2
        }
      ]}
      source={{uri: url}}/>
  )
}

const styles = StyleSheet.create({
  avatar: {}
})
