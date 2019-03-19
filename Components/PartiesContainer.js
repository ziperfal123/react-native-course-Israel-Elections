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
        this.props.navigation.navigate(`StatusScreen`);
    }

    eachItem(partyName , index) {
        return (
            <View>
                <PartyToChooseItem partyName={partyName} disableButtonsFunc ={this.disableButtonsFunc} disableButtonsFlag={this.state.disableBtnFlag} />
            </View>
            
        )
    }



    // eachItem = (partyName , index) => {
    //     return (
    //         <View>
    //             <PartyToChooseItem partyName={partyName}></PartyToChooseItem>
    //         </View>
            
    //     )
    // }


    render() {
        return(
            <View style={styles.container}  >
                {this.state.partiesNames.map(this.eachItem)}
            </View>
        );
    }
}


/*..Styles..*/

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
    }
})
