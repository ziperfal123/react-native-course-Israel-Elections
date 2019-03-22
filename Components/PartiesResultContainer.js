import React, { Component } from 'react'
import { View } from 'react-native'
import PartyResultItem from './PartyResultItem'

class PartiesResultContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partiesResultsList: [],
      totalVotes: Number
    }

    this.eachItem = this.eachItem.bind(this)
  }

  componentDidMount() {
    const getResultsURL = 'https://isr-elections.herokuapp.com/api/parties/poll-status'
    fetch(getResultsURL)
      .then(res => res.json())
      .then(data => {
        const tmpArrOfParties = Object.entries(data)
        let tmpTotalVotes = 0
        for (let i = 0; i < tmpArrOfParties.length; i++) {
          tmpArrOfParties[i][1] = Object.entries(tmpArrOfParties[i][1])
          tmpArrOfParties[i][1] = tmpArrOfParties[i][1][0][1] // optimization of the returned data for holding the data in a simplified structured array
          tmpTotalVotes += tmpArrOfParties[i][1]
        }
        tmpArrOfParties.sort((a, b) => {
          return b[1] - a[1]
        })
        tmpArrOfParties.length = 5 // taking only the top 5
        this.setState({
          partiesResultsList: tmpArrOfParties,
          totalVotes: tmpTotalVotes
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  eachItem(party, index) {
    let votesPresentage = (party[1] / this.state.totalVotes) * 100
    votesPresentage = parseFloat(votesPresentage).toFixed(1)
    return <PartyResultItem partyName={party[0]} partyScore={votesPresentage} key={index} />
  }

  render() {
    return <View>{this.state.partiesResultsList.map(this.eachItem)}</View>
  }
}

export default PartiesResultContainer
