import { ReactNode } from 'react';
import * as C from './styles';;
import React from 'react';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                    <C.Page>
                        {children}
                    </C.Page>
            </C.Area>
        </C.Container>
    );
}

function useForm(): { state: any; } {
    throw new Error('Function not implemented.');
}
