import React, {Component} from 'react';
import {Platform, StyleSheet, View , ScrollView} from 'react-native';
import Header from '../Components/Header'
import PartiesContainer from '../Components/PartiesContainer'

export default class VoteScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textContent: 'status',
      isDisabled: false
    }
    this.disableButtonsAtVoteScreen = this.disableButtonsAtVoteScreen.bind(this)
  }

  disableButtonsAtVoteScreen() {
    this.setState({isDisabled: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} screenToGo='StatusScreen' />
        <ScrollView>
            <PartiesContainer navigation={this.props.navigation} isDisabled={this.state.isDisabled} disableButtonsAtVoteScreen={this.disableButtonsAtVoteScreen}/>
        </ScrollView>
      </View>
    );
  }
}

/* ..styles.. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b',
  },
});

