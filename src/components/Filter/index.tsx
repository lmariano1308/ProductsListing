import * as S from './styles';
import Label from '../Label';
import Category from '../Category';
import SlideInLeft from '../../animations/SlideInLeft';
import CategoryItem from '../CategoryItem';
import { Funnel } from '@phosphor-icons/react';

interface Props {
    categories: Map<string, number>;
    selected: string;
    onSelect: (category: string) => void;
}

const Filter = ({ categories, selected, onSelect }: Props) => {
    const isMobile = window.innerWidth <= 768;
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

    const renderIcon = () => {
        if (isMobile) {
            return <Funnel size={20} />;
        }
    };

    return (
        <S.FilterContainer>
            <Label icon={renderIcon()}>Filtros</Label>
            <Category>{renderCategoryItems()}</Category>
        </S.FilterContainer>
    );
};

export default Filter;
