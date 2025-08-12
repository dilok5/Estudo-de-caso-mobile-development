import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2567e8',
        alignItems: 'center',
        justifyContent: 'center'
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
        borderBottomColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: '100%',
        fontWeight: 'bold'
    }
})