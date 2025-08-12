import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imagem: {
        width: '100%',
        height: '40%',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    titulo: {
        width: '100%',
        height: 60,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    preco: {
        width: '100%',
        height: 30,
        color: 'red',
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    desc: {
        width: '100%',
        height: '40%',
        padding: 20,
        color: 'gray',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 20
    }
})