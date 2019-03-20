import React from 'react';
import {View, Text, Image , StyleSheet} from 'react-native'

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

const PartyResultItem = (props) => {
    var partyName = (props.partyName).replace(/-/g , '');
    return (
        <View style={styles.itemContainer}> 
            <Image style={styles.imageStyle} source={peopleImages[partyName]} />
            <Text style={styles.textStyle}>{props.partyName}</Text>
            <Text style={styles.scoreStyle}>{props.partyScore}%</Text>
        </View>
    )
}
export default PartyResultItem;


/* ..styles.. */
const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#113f67",
        marginTop: 24,
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