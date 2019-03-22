import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import PartyToChooseItem from './PartyToChooseItem'

/*..Styles..*/
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  }
})

class PartiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partiesNames: [],
      disableBtnFlag: false
    }
    this.eachItem = this.eachItem.bind(this)
    this.disableButtonsFunc = this.disableButtonsFunc.bind(this)
  }

  componentDidMount() {
    const getPartiesURL = 'https://isr-elections.herokuapp.com/api/parties'
    fetch(getPartiesURL)
      .then(res => res.json())
      .then(data => {
        const tmpArrOfParties = new Array()
        data.parties.forEach(item => {
          tmpArrOfParties.push(item.id)
        })
        this.setState({ partiesNames: tmpArrOfParties })
      })
      .catch(err => {
        console.log(err)
      })
  }

  disableButtonsFunc() {
    this.setState({ disableBtnFlag: true })
    this.props.disableButtonsAtVoteScreen()
    this.props.navigation.navigate(`StatusScreen`)
  }

  eachItem(partyName, index) {
    return (
      <PartyToChooseItem
        key={index}
        partyName={partyName}
        disableButtonsFunc={this.disableButtonsFunc}
        isDisabled={this.props.isDisabled}
      />
    )
  }

  render() {
    return (
      <View>
        <View style={styles.container}>{this.state.partiesNames.map(this.eachItem)}</View>
      </View>
    )
  }
}

export default PartiesContainer
