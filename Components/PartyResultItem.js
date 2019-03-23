import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'
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

class PartyResultItem extends Component {
  constructor(props) {
    super(props)
    this.fadeAnimation = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true
    }).start()
  }

  render() {
    const partyName = this.props.partyName.replace(/-/g, '')
    return (
      <View>
        <Animated.View style={[styles.itemContainer, { opacity: this.fadeAnimation }]}>
          <Image style={styles.imageStyle} source={ImagesPaths.peoplePics[partyName]} />
          <Text style={styles.textStyle}>{this.props.partyName}</Text>
          <Text style={styles.scoreStyle}>{this.props.partyScore}%</Text>
        </Animated.View>
      </View>
    )
  }
}
export default PartyResultItem
