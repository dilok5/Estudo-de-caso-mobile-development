import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    card: {
        width: '42%',
        height: 220,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 10
    },
    imageCard: {
        width: '100%',
        height: '40%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        resizeMode: 'contain'
    },
    tituloCard: {
        width: '100%',
        height: 30,
        padding: 5,
        fontWeight: 'bold'
    },
    descricao: {
        width: '100%',
        height: 70,
        padding: 8,
        fontSize: 10,
        color: 'gray'
    },
    priceCard: {
        width: '100%',
        height: '14%',
        paddingTop: 7,
        paddingLeft: 7,
        fontWeight: 'bold',
        fontSize: 16
    }
})