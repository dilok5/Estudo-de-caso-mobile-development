import { RootState } from "@/src/store";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./manDetailsStyles";

export type DetailsManItem = {
  images: string[];
  title: string;
  price: string;
  description: string;
};

export const DetailsMan = () => {
  const detailsMan = useSelector(
    (state: RootState) => state.detailsMan.details
  ) as DetailsManItem[];

  const item = detailsMan[0];

  return (
    <View style={styles.tela}>
      <Image 
        style={styles.imagem} 
        source={{ uri: detailsMan?.images[0] }} 
      />
      <Text style={styles.titulo}>{detailsMan?.title}</Text>
      <Text style={styles.preco}>R$ {detailsMan?.price}</Text>
      <Text style={styles.desc}>{detailsMan?.description}</Text>
    </View>
  );
};
