import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native';
import {store} from '@/src/store/index'
import { Provider } from "react-redux";
import {styles} from "../components/styles"

interface CardProps {
    titulo: string,
    descricao: string,
    imagem: string,
    preco: string,
    onClick: () => void
}

export const Card = ({titulo, descricao, imagem, preco, onClick}: CardProps) => {

    return (
        <Provider store={store}>
            <TouchableOpacity style={styles.card} onPress={onClick}>
                <Image style={styles.imageCard} source={{ uri: imagem }}/>
                <Text style={styles.tituloCard}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.priceCard}>R$ {preco}</Text>
            </TouchableOpacity>
        </Provider>
    )
}