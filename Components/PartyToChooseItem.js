import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

const partiesImages = {
    likud: require('../assets/partiesImages/likud.jpg'),
    avoda: require('../assets/partiesImages/avoda.jpg'),
    kahollavan: require('../assets/partiesImages/kahol-lavan.jpg'),
    merez: require('../assets/partiesImages/merez.jpg'),
    kulanu: require('../assets/partiesImages/kulanu.jpg'),
    yaminhadash: require('../assets/partiesImages/yamin-hadash.jpg'),
    israelbeitenu: require('../assets/partiesImages/israel-beitenu.jpg'),
    shas: require('../assets/partiesImages/shas.jpg'),
    yahaduthatora: require('../assets/partiesImages/yahadut-hatora.jpg'),
    raamtaal: require('../assets/partiesImages/raam-taal.jpg'),
    balad: require('../assets/partiesImages/balad.jpg'),
    zehut: require('../assets/partiesImages/zehut.jpg'),
    gesher: require('../assets/partiesImages/gesher.jpg'),
    ihudmiflagothayamin: require('../assets/partiesImages/ihud-miflagot-hayamin.jpg'),
    magen: require('../assets/partiesImages/magen.jpg')
}
    






export default class PartyToChooseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyName: ''
        }

        this.handlePress = this.handlePress.bind(this)
        this.handleSubmitPress = this.handleSubmitPress.bind(this)
    }

    handleSubmitPress() {
        Alert.alert(
            `Thanks for voting!` ,
            `Lets see the top 5 parties so far!`
        )
        this.props.disableButtonsFunc();

    }

    handlePress() {
        Alert.alert(
            `Are you sure you want to vote to ${this.props.partyName}?`,
            `Think carefully.\n The future is in your hands.`,
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'OK', onPress: this.handleSubmitPress},
            ],
          );
                  // const url= `https://isr-elections.herokuapp.com/api/parties/vote/${this.props.partyName}`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        // })
        // .then((response) => console.log(response))
        // // if response.status == 200 disable all buttons, if 400 print message.
        // // .then((response) => response.statusCode === 200 ? this.setState({isSuccessVote: true}) : alert(data.Comment) )
        // .catch(err => console.log(err))
    }



    render() {
        var paryName = (this.props.partyName).replace(/-/g , '');
        return(
            <View style={styles.partyContainer}>
                <TouchableOpacity style={this.props.isDisabled ? styles.disableButtonStyle : null} onPress={this.handlePress} disabled={this.props.isDisabled}>
                        <Image style={styles.partiesImagesStyle} source={partiesImages[paryName]} />
                        <Text style={styles.textStyle}>{this.props.partyName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    partyContainer: {
        height: 170,
        width: 185,
        justifyContent: 'flex-end',
        marginBottom: 3,
        backgroundColor: '#bdbdbd',
        borderWidth: 1,
    },

    textStyle: {
        width: 185,
        backgroundColor: '#8e8e8e',
        textAlign: 'center',
        fontSize: 24

    },
    
    partiesImagesStyle: {
        width: 185
    },

    disableButtonStyle: {
        opacity: 0.35
    }

})
