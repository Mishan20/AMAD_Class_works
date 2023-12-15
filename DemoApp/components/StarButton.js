const { View, TouchableOpacity, Text, StyleSheet } = require("react-native");

export default function StarButton(props){
    return(
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.color,
            padding:10,
            width:'40%',
            borderRadius:100,
            justifyContent: 'center',
            alignItems:"center"
        }}>

            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    btn:{

    },
    text:{
        color:'white'

    },
})