import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Platform, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import Colors from "../constans/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, excl) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rnNum = Math.floor(Math.random() * (max - min)) + min;

    if (rnNum === excl) {
        return generateRandomBetween(min, max, excl);
    } else {
        return rnNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    return (
        <View style={styles.screen}>
            <Text>
                Opponent's Guess
            </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={()=>{}}/>
                <Button title="Greater" onPress={()=>{}}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;