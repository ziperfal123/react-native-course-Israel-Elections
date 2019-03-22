import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import Header from '../Components/Header'
import PartiesContainer from '../Components/PartiesContainer'

/* ..styles.. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b'
  },
  messageStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#a43737',
    position: 'relative',
    alignItems: 'center',
    marginBottom: 6
  },
  messageTextStyle: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Futura',
    color: '#e9e4e6'
  }
})

class VoteScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textContent: 'status',
      isDisabled: false
    }
    this.disableButtonsAtVoteScreen = this.disableButtonsAtVoteScreen.bind(this)
  }

  disableButtonsAtVoteScreen() {
    setTimeout(() => {
      this.setState({ isDisabled: true })
    }, 600)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} screenToGo="StatusScreen" />
        {this.state.isDisabled ? (
          <View style={styles.messageStyle}>
            <Text style={styles.messageTextStyle}>You can vote only once</Text>
          </View>
        ) : null}

        <ScrollView>
          <PartiesContainer
            navigation={this.props.navigation}
            isDisabled={this.state.isDisabled}
            disableButtonsAtVoteScreen={this.disableButtonsAtVoteScreen}
          />
        </ScrollView>
      </View>
    )
  }
}

export default VoteScreen
