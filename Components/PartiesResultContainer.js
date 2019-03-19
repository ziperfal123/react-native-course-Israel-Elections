import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, Image, ScrollView , StyleSheet} from 'react-native'

import PartyResultItem from './PartyResultItem'


export default class PartiesResultContainer extends Component {
    constructor(props) {
        super(props)
        this.state= {
            partiesResultsList: [], 
            totalVotes: Number
        }
    }

    componentDidMount() {
        const getResultsURL = 'https://isr-elections.herokuapp.com/api/parties/poll-status';
        fetch(getResultsURL)
        .then(res => res.json())
        .then(data => {
            let tmpArrOfParties = Object.entries(data);
            let tmpTotalVotes = 0
            for (let i = 0 ; i < tmpArrOfParties.length ; i++) {
                tmpArrOfParties[i][1] = Object.entries(tmpArrOfParties[i][1]);
                tmpArrOfParties[i][1] = (tmpArrOfParties[i][1])[0][1];  // optimization of the returned data..
                tmpTotalVotes += tmpArrOfParties[i][1]
            }
            tmpArrOfParties.sort( (a , b) => {
                return b[1] - a[1];
            })
            this.setState({
                partiesResultsList: tmpArrOfParties,
                totalVotes: tmpTotalVotes
            })
        })
        .catch( err => {console.log(err)});
    }


    eachItem = (party , index) => {
        let votePresentage = (party[1] / this.state.totalVotes) * 100.;
        votePresentage = parseFloat(votePresentage).toFixed(1);
        return (
            
            <View>
                <PartyResultItem partyName={party[0]} partyScore={votePresentage} />
            </View>
        );
    }



    render() {
        return(
            <View>
                {this.state.partiesResultsList.map(this.eachItem)}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})
