import { StyleSheet } from 'react-native'
import { colors } from '@/src/constants/colors'

export const styles = StyleSheet.create({
    tela: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    containerBottons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50
    },
    buttons: {
        borderBottomWidth: 2,
        borderBottomColor: colors.azul,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: '100%',
        fontWeight: 'bold'
    },
    listaProdutos: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitButton: {
        backgroundColor: '#d9534f', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 20,
        alignItems: 'center',  
        width: '90%',           
        alignSelf: 'center',
    },
    textButton: {
        color: '#fff',              // texto branco
        fontSize: 16,
        fontWeight: '600',
    }
})