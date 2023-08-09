import * as S from './styles';
import SlideInUp from '../../animations/SlideInUp';
import FadeIn from '../../animations/FadeIn';

interface Props {
    name: string;
    image: string;
    index: number;
}

const ProductItem = ({ name, image }: Props) => {
    return (
        <S.Container>
            <FadeIn>
                <S.Image src={image} />
            </FadeIn>
            <SlideInUp>
                <S.Name>{name}</S.Name>
            </SlideInUp>
        </S.Container>
    );
};

export default ProductItem;
