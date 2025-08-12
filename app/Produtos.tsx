import React from "react";
import { ProdutosScreen } from "@/src/screens/produtos/produtos-screen";
import { store } from '@/src/store/index'
import { Provider } from "react-redux";

export default function ListaProdutos() {
    return (
        <Provider store={store}>
            <ProdutosScreen />
        </Provider>
    )
}