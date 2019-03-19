import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , ScrollView, Button} from 'react-native';

import Header from '../Components/Header'
import PartiesContainer from '../Components/PartiesContainer'



export default class VoteScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textContent: 'status',
      isDisabled: false
    }

    this.justDoIt = this.justDoIt.bind(this)
  }

  componentDidMount() {
    console.log("DDDDDDDDDDD");
    console.log(this.state.isDisabled);
    }


  justDoIt() {
    this.setState({isDisabled: true})
    console.log("bla")
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style= {styles.bla} marginTop={43} navigation={this.props.navigation} screenToGo='StatusScreen' />
        <ScrollView>
            <PartiesContainer navigation={this.props.navigation} isDisabled={this.state.isDisabled} justDoIt={this.justDoIt}/>
        </ScrollView>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b',
  },

});

