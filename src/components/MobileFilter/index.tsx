import React from 'react';
import * as S from './styles';
import { Funnel } from '@phosphor-icons/react';
import { COLORS } from '../../misc/colors';
import Label from '../Label';
import Category from '../Category';
import SlideInLeft from '../../animations/SlideInLeft';
import CategoryItem from '../CategoryItem';
import { AnimatePresence } from 'framer-motion';

interface Props {
    categories: Map<string, number>;
    selected: string;
    onSelect: (category: string) => void;
    isOpen: boolean;
    onPress: () => void;
}

const MobileFilter: React.FC<Props> = ({ categories, selected, onSelect, isOpen, onPress }) => {
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
                    onClick={() => handleSelectCategory(category)}
                />
            </SlideInLeft>
        ));
    };

    return (
        <>
            <S.FilterContainer onClick={onPress}>
                <Label right={<Funnel size={20} color={COLORS.PRIMARY} />}>Filtros</Label>
            </S.FilterContainer>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <Category
                        layout
                        variants={{
                            open: {
                                height: 'auto',
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.07,
                                    delayChildren: 0.2,
                                },
                            },
                            closed: {
                                height: 0,
                                opacity: 0,
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}>
                        {renderCategoryItems()}
                    </Category>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileFilter;
