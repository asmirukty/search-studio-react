import {useState} from 'react'


export default function useCheckGroup (
    initialParent: any[],
    initialChildren: any[],
    deleteParentProp: (item: string) => void,
    deleteChildProp: (item: string) => void,
    ): [
        any[],
        any[],
        (arg0: string[]) => (item: string) => void,
        (arg0: string, arg1: string[]) => (item: string) => void,
        (arg0: string[]) => (item: string) => void,
        (arg0: string) => (item: string) => void,
        (item: string, arg0: string[]) => () => void,
        (item: string) => () => void,
    ]　{
    const [parent, setParent] = useState(initialParent)
    const [children, setChildren] = useState(initialChildren)

    const checkedParent = (thisChildren: string[]) => (newItem: string) : void => {
        setParent(prevState => (
            [...prevState, newItem]
        ))
        setChildren(prevState => (
            [...prevState, ...thisChildren]
        ))
    };

    const checkedChild = (parent: string, thisChildren: string[]) => (newItem: string) : void => {
        setChildren(prevState => (
            [...prevState, newItem]
        ))
        !(thisChildren.map((child) => [...children, newItem].includes(child))).includes(false) &&
        setParent(prevState => (
            [...prevState, parent]
        ))
    };

    const unCheckedParent = (thisChildren: string[]) => (newItem: string) : void => {
        setParent(prevState => (
            prevState.filter((element: string) => {
                return element !== newItem
            })
        ))
        setChildren(prevState => (
            prevState.filter((element: string) => {
                return !thisChildren.includes(element)
            })
        ))
    }

    const unCheckedChild = (parent: string) => (newItem: string) : void => {
        setChildren(prevState => (
            prevState.filter((element: string) => {
                return element !== newItem
            })
        ))
        setParent(prevState => (
            prevState.filter((element: string) => {
                return element !== parent
            })
        ))
    };

    const deleteParent = (item: string, thisChildren: string[]) => () : void => {
            setParent(prevState => (
                prevState.filter((element: string) => {
                    return element !== item
                })
            ))
            setChildren(prevState => (
                prevState.filter((element: string) => {
                    return !thisChildren.includes(element)
                })
            ))
            deleteParentProp(item);
            thisChildren.map((child) => {
                return deleteChildProp(child)
            })
        }

    const deleteChild = (item: string) => () => {
            setChildren((prevState: string[]) => (
                prevState.filter((element: string) => {
                    return element !== item
                })
            ))
            deleteChildProp(item)
    }

    return [parent, children, checkedParent, checkedChild, unCheckedParent, unCheckedChild, deleteParent, deleteChild]
}