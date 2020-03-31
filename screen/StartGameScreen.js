import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Platform, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import Colors from "../constans/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');

    const numbeInputVal = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHendler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmHendler = () => {
        const chosenNumber = parseInt(enteredValue);

        if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Num', " the message ", [{text: "Okey", style: 'destuctive', onPress: resetInputHendler}])
            return;
        }

        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>Confirmed</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start the Game" onPress={()=>props.onStartGame(selectedNumber)}/>
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text  style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    maxLength={2}
                    autoCorrect={false}
                    onChangeText={numbeInputVal}
                    value={enteredValue}
                    keyboardType="numeric"/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color={Colors.primaryKey}
                            title="Reset"
                            onPress={resetInputHendler}/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            color={Colors.accent}
                            title="Confirm"
                            onPress={confirmHendler}/>
                    </View>

                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;
