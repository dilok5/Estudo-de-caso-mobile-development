import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './productsStyle';
import { Card } from '@/src/components/card';
import axios from 'axios';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setDetails } from '@/src/store/slices/man-details-slice';

interface Produto {
  title: string;
  description: string;
  price: string;
  images: string;
}

export const ProdutosScreen = () => {
  const [dados, setDados] = useState<Produto[]>([]);
  const dispatch = useDispatch();

  const getApi = async () => {
    return await axios
      .get('https://dummyjson.com/products')
      .then((resp) => {
        setDados(resp.data.products);
      });
  };

  const getApiMasc = async () => {
    return await axios
      .get('https://dummyjson.com/products/category/mens-shirts')
      .then((resp) => {
        setDados(resp.data.products);
      });
  };

  const getApiFem = async () => {
    return await axios
      .get('https://dummyjson.com/products/category/womens-dresses')
      .then((resp) => {
        setDados(resp.data.products);
      });
  };

  const buttonClick = () => {
    router.replace('/');
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ScrollView style={styles.tela}>
      <View style={styles.containerBottons}>
        <TouchableOpacity style={styles.buttons} onPress={getApiMasc}>
          <Text>Produtos Masculinos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={getApiFem}>
          <Text>Produtos Femininos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listaProdutos}>
        {dados.map((produto, idx) => (
          <Card
            key={idx}
            titulo={produto.title}
            descricao={produto.description}
            imagem={
              typeof produto.images === 'string' ? produto.images : produto.images[0]
            }
            preco={produto.price}
            onClick={() => {
              dispatch(setDetails(produto));
              router.navigate('/(stacks)/Detalhes');
            }}
          />
        ))}
      </View>

      <View>
        <TouchableOpacity style={styles.exitButton} onPress={buttonClick}>
          <Text style={styles.textButton}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};