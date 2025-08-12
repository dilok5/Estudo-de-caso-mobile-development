import { DetailsMan } from '@/src/screens/details/details-man'
import { store } from '@/src/store/index'
import { Provider } from 'react-redux'

export default function DetalhesM () {
    return <Provider store={store}><DetailsMan /></Provider>
}