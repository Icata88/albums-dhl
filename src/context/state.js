import { useState } from 'react';

export const useContextState = () => {

    const [selectedNavOption, setSelectedNavOption] = useState('1');

    return {
        selectedNavOption,
        setSelectedNavOption
    }

}