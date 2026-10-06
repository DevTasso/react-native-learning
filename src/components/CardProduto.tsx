import { View, Text } from 'react-native';

type CardProdutoProps = {
  nome: string;
  preco: string;
};

export default function CardProduto({ nome, preco }: CardProdutoProps) {
  return (
    <View>
      <Text>Produto: {nome}</Text>
      <Text>Preço: {preco}</Text>
    </View>
  );
}