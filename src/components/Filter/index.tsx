import * as S from './styles';
import Label from '../Label';
import Category from '../Category';
import SlideInLeft from '../../animations/SlideInLeft';
import CategoryItem from '../CategoryItem';

interface Props {
    categories: Map<string, number>;
    selected: string;
    onSelect: (category: string) => void;
}

const Filter = ({ categories, selected, onSelect }: Props) => {
    const handleSelectCategory = (category: string) => {
        if (category === selected) {
            onSelect('');
        } else {
            onSelect(category);
        }
    };

    const renderCategoryItems = () => {
        return Array.from(categories).map(([category, count], index) => (
            <SlideInLeft index={index} key={category}>
                <CategoryItem
                    name={category}
                    count={count}
                    checked={category === selected}
                    onClick={handleSelectCategory}
                />
            </SlideInLeft>
        ));
    };

    return (
        <S.FilterContainer>
            <Label>Filtros</Label>
            <Category>{renderCategoryItems()}</Category>
        </S.FilterContainer>
    );
};

export default Filter;
