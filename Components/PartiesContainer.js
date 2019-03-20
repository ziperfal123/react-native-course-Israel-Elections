import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PartyToChooseItem from './PartyToChooseItem';

export default class PartiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partiesNames: [],
            disableBtnFlag: false
        }
        this.eachItem = this.eachItem.bind(this)
        this.disableButtonsFunc = this.disableButtonsFunc.bind(this);
    }

    componentDidMount() {
        const getPartiesURL = 'https://isr-elections.herokuapp.com/api/parties';
        fetch(getPartiesURL)
        .then(res => res.json())
        .then(data => {
            let tmpArrOfParties = new Array();
            data.parties.forEach(item => {
                tmpArrOfParties.push(item.id);
            })
            this.setState({partiesNames: tmpArrOfParties});
        })
        .catch( err => {console.log(err)});
    }

    disableButtonsFunc() {
        console.log(`in disableButtons()`);
        this.setState({disableBtnFlag: true});
        this.props.disableButtonsAtVoteScreen();
        this.props.navigation.navigate(`StatusScreen`)
    }

    eachItem(partyName , index) {
        return (
            <View>
                <PartyToChooseItem partyName={partyName} disableButtonsFunc={this.disableButtonsFunc} isDisabled={this.props.isDisabled} />
            </View>
        )
    }

    render() {
        return(
            <View>
                <View style={styles.container}>
                    {this.state.partiesNames.map(this.eachItem)}
                </View>
                {this.state.disableBtnFlag ? (
                <View style={styles.messageStyle}>
                    <Text>You already voted..</Text>
                </View>  
                ) : null}
            </View>
        );
    }
}

/*..Styles..*/
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
    },
    messageStyle: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
        position: 'absolute',
        marginTop: 150,
    }
})