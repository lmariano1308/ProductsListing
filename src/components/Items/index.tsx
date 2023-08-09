import * as S from './styles';

import Label from '../Label';
import ProductItem from '../ProductItem';
import { Node } from '../../types/json';

interface Props {
    data: Node[];
}

const Items = ({ data }: Props) => {
    return (
        <S.Container>
            <Label>{`${data.length} resultados`}</Label>
            <S.ProductsList>
                {data
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((product, index) => (
                        <ProductItem
                            key={index}
                            index={index}
                            name={product.name}
                            image={product.images[0].asset.url}
                        />
                    ))}
            </S.ProductsList>
        </S.Container>
    );
};

export default Items;
