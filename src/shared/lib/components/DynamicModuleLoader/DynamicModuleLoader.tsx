import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
export interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}
export type ReducersListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
            store?.reducerManager?.add(keyName as StateSchemaKey, reducer);
            dispatch({ type: `@INIT Add ${keyName} state` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([keyName]) => {
                    store?.reducerManager?.remove(keyName as StateSchemaKey);
                    dispatch({ type: `@DESTROY Remove ${keyName} state` });
                });
            }
        };
        // eslint-disable-next-line
        }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
