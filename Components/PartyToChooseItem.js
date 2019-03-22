import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import ImagesPaths from './ImagesPaths'

/* ..styles.. */
const styles = StyleSheet.create({
  partyContainer: {
    height: 170,
    width: 185,
    justifyContent: 'flex-end',
    marginBottom: 3,
    backgroundColor: '#bdbdbd',
    borderWidth: 1
  },
  textStyle: {
    width: 185,
    textAlign: 'center',
    backgroundColor: '#9e999b',
    color: '#1c070f',
    fontSize: 24
  },
  partiesImagesStyle: {
    width: 185
  },
  disableButtonStyle: {
    opacity: 0.35
  }
})

class PartyToChooseItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partyName: ''
    }
    this.handlePress = this.handlePress.bind(this)
    this.handleSubmitPress = this.handleSubmitPress.bind(this)
  }

  handleSubmitPress() {
    Alert.alert(`Thanks for voting!`, `Lets see the top 5 parties so far!`)
    this.props.disableButtonsFunc()
  }

  handlePress() {
    Alert.alert(
      `Are you sure you want to vote to ${this.props.partyName}?`,
      `Think carefully.\n The future is in your hands.`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: this.handleSubmitPress }
      ]
    )
    const url = `https://isr-elections.herokuapp.com/api/parties/vote/${this.props.partyName}`
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  render() {
    const paryName = this.props.partyName.replace(/-/g, '')
    return (
      <View style={styles.partyContainer}>
        <TouchableOpacity
          style={this.props.isDisabled ? styles.disableButtonStyle : null}
          onPress={this.handlePress}
          disabled={this.props.isDisabled}
        >
          <Image style={styles.partiesImagesStyle} source={ImagesPaths.partiesLogos[paryName]} />
          <Text style={styles.textStyle}>{this.props.partyName}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PartyToChooseItem
