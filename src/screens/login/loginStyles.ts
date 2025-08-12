import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tela1: {
        backgroundColor: '#2567e8',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tela2:{
        width: '80%',
        minHeight: 270,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 16,
        position: 'absolute',
        backgroundColor: '#fff',
        top: '35%',
        left: '10%',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        paddingTop: 40,
        paddingBottom: 10,
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        flexDirection: 'column',
        gap: 25
    },
    texto1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    texto2: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10
    },
    inText: {
        width: '90%',
        height: 30,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        marginTop: 6,
        boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.5)'
    },
    button: {
        width: '90%',
        height: 37,
        borderWidth: 1,
        backgroundColor: colors.azul,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        fontSize: 16
    },

    // Alertas de validação
    // Campo vazio
    fieldEmpty: {
        borderColor: 'red',
        borderWidth: 2
    },
    textHidden: {
        display: 'none'
    },
    textAlert: {
        color: 'red',
        fontSize: 13,
        marginTop: 4,
        display: 'flex'
    }
})