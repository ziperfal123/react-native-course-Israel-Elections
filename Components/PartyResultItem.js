import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ImagesPaths from './ImagesPaths'

/* ..styles.. */
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#226597',
    marginTop: 24,
    height: 100
  },
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 4
  },
  textStyle: {
    fontSize: 26,
    color: '#f3f9fb',
    width: '44%',
    marginLeft: 10
  },
  scoreStyle: {
    textAlign: 'center',
    fontSize: 26,
    color: '#f3f9fb',
    width: '20%',
    marginLeft: 16
  }
})

const PartyResultItem = props => {
  const partyName = props.partyName.replace(/-/g, '')
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imageStyle} source={ImagesPaths.peoplePics[partyName]} />
      <Text style={styles.textStyle}>{props.partyName}</Text>
      <Text style={styles.scoreStyle}>{props.partyScore}%</Text>
    </View>
  )
}
export default PartyResultItem
