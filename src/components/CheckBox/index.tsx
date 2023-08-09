import { type FC } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

import * as S from './styles';
import { COLORS } from '../../misc/colors';

interface Props {
    checked: boolean | undefined;
    onClick?: () => void;
    disabled?: boolean;
}

const checkVariants = {
    initialState: {
        color: '#fff',
    },
    checked: {
        pathLength: 1,
    },
    unchecked: {
        pathLength: 0,
    },
};

const boxVariants = {
    checked: {
        backgroundColor: `${COLORS.SECONDARY}`,
        transition: {
            duration: 0.2,
        },
    },
    unchecked: {
        backgroundColor: `transparent`,
        transition: {
            duration: 0.2,
        },
    },
};

const CheckBox: FC<Props> = ({ checked, onClick, disabled }) => {
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    return (
        <S.SvgBox
            variants={boxVariants}
            animate={checked ? 'checked' : 'unchecked'}
            onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
                if (!disabled) {
                    onClick?.();
                }
            }}
            disabled={disabled}>
            <S.Svg viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <S.Path
                    variants={checkVariants}
                    animate={checked ? 'checked' : 'unchecked'}
                    style={{ pathLength, opacity }}
                    fill="none"
                    strokeMiterlimit={10}
                    strokeWidth={6}
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </S.Svg>
        </S.SvgBox>
    );
};

export default CheckBox;
