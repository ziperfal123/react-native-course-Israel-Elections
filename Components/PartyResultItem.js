import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, Image , StyleSheet} from 'react-native'


const peopleImages = {
    likud: require('../assets/peopleImages/likud.jpg'),
    avoda: require('../assets/peopleImages/avoda.jpg'),
    kahollavan: require('../assets/peopleImages/kahol-lavan.jpg'),
    merez: require('../assets/peopleImages/merez.jpg'),
    kulanu: require('../assets/peopleImages/kulanu.jpg'),
    yaminhadash: require('../assets/peopleImages/yamin-hadash.jpg'),
    israelbeitenu: require('../assets/peopleImages/israel-beitenu.jpg'),
    shas: require('../assets/peopleImages/shas.jpg'),
    yahaduthatora: require('../assets/peopleImages/yahadut-hatora.jpg'),
    raamtaal: require('../assets/peopleImages/raam-taal.jpg'),
    balad: require('../assets/peopleImages/balad.jpg'),
    zehut: require('../assets/peopleImages/zehut.jpg'),
    gesher: require('../assets/peopleImages/gesher.jpg'),
    ihudmiflagothayamin: require('../assets/peopleImages/ihud-miflagot-hayamin.jpg'),
    magen: require('../assets/peopleImages/magen.jpg')
}


export default class PartyResultItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var partyName = (this.props.partyName).replace(/-/g , '');
        console.log("partyName:")
        console.log(partyName)

        return (
            <View style={styles.itemContainer}> 
                <Image style={styles.imageStyle} source={peopleImages[partyName]} />
                <Text style={styles.textStyle}>{this.props.partyName}</Text>
                <Text style={styles.scoreStyle}>{this.props.partyScore}%</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#113f67",
        marginTop: 14,
    },

    imageStyle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginLeft: 4
    },

    textStyle: {
        fontSize: 24,
        color: '#929292',
        width: '44%',
        marginLeft: 10,
    },

    scoreStyle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#929292',
        width: '20%',
        marginLeft: 16
    }

})