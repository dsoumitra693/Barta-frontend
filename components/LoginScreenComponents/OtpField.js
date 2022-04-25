import { StyleSheet, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'


const input = ['', '', '', '']
let currentFoucsIndex = 0
const OtpField = ({ setCode }) => {
    const ref_input = useRef();
    const [focusIndex, setFocusIndex] = useState(0)
    const [otp, setOtp] = useState({ 0: '', 1: '', 2: '', 3: '', })
    
    useEffect(() => {
        ref_input.current.focus()
    }, [focusIndex])
    useEffect(() => {
      setCode(otp[0]+otp[1]+otp[2]+otp[3])
    }, [otp])
    

    const handleTextChange = (text, index) => {
        let newOtp = { ...otp }
        newOtp[index] = text
        setOtp(newOtp)
        if (text === '') {
            currentFoucsIndex = focusIndex === 0 ? 0 : focusIndex - 1
            setFocusIndex(currentFoucsIndex)
        } else {
            currentFoucsIndex = focusIndex === 3 ? 3 : 1 + focusIndex
            setFocusIndex(currentFoucsIndex)
        }
    }
    // const handleKeyPressEvnt = (key, index) => {
    //     if (key === 'Backspace' && otp[index] === '') {
    //         currentFoucsIndex = focusIndex === 0 ? 0 : focusIndex - 1
    //         setFocusIndex(currentFoucsIndex)
    //     }
    // }
    return (
        <View style={__styles.container}>
            {input.map((_, index) =>
                <TextInput style={__styles.textInput}
                    maxLength={1}
                    value={otp[index]}
                    autoFocus={currentFoucsIndex === index}
                    ref={index === focusIndex ? ref_input : null}
                    key={index}
                    onChangeText={(text => handleTextChange(text, index))}
                    // onKeyPress={e => handleKeyPressEvnt(e.nativeEvent.key, index)}
                    keyboardType='number-pad'
                />
            )}
        </View>
    )
}

export default OtpField

const __styles = StyleSheet.create({
    container: {
        // backgroundColor: 'grey',
        width: 360,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: 'center'
    },
    textInput: {
        width: '18%',
        height: '60%',
        borderWidth: 1,
        borderColor: '#8e8e8e',
        borderRadius: 10,
        fontSize: 25,
        textAlign: 'center',
    },
})