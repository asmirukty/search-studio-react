import {useEffect, useState} from 'react'

type parentType = {name: string, id: string}
type childType = {name: string, id: string}

export default function useCheckGroup (
    open: boolean,
    initialParent: any[],
    initialChildren: any[],
    deleteParentProp: (item: parentType) => void,
    deleteChildProp: (item: childType) => void,
    ) : [
        any[],
        any[],
        (thisChildren: childType[]) => (newItem: parentType) => void,
        (parent: parentType, thisChildren: childType[]) => (newItem: childType) => void,
        (thisChildren: childType[]) => (newItem: parentType) => void,
        (parent: parentType) => (newItem: childType) => void,
        (item: parentType, thisChildren: childType[]) => () => void,
        (item: childType) => () => void,
    ]　{
    const [parent, setParent] = useState<parentType[]>(initialParent)
    const [children, setChildren] = useState<childType[]>(initialChildren)

    useEffect(() => {
        if (!open) {
            setParent(initialParent)
            setChildren(initialChildren)
        }
    }, [open])

    const checkedParent = (thisChildren: childType[]) => (newItem: parentType) : void => {
        setParent(prevState => (
            [...prevState, newItem]
        ))
        thisChildren.map((thisChild) =>
            !children.includes(thisChild) &&
                setChildren(prevState =>
                    [...prevState, thisChild]
                )
        )
        thisChildren.map((thisChild) =>
            children.includes(thisChild) && console.log(thisChild)
        )
    };

    const checkedChild = (parent: parentType, thisChildren: childType[]) => (newItem: childType) : void => {
        setChildren(prevState => (
            [...prevState, newItem]
        ))
        !(thisChildren.map((child) => [...children, newItem].includes(child))).includes(false) &&
        setParent(prevState => (
            [...prevState, parent]
        ))
    };

    const unCheckedParent = (thisChildren: childType[]) => (newItem: parentType) : void => {
        setParent(prevState => (
            prevState.filter((element: parentType) => {
                return element !== newItem
            })
        ))
        setChildren(prevState => (
            prevState.filter((element: childType) => {
                return !thisChildren.includes(element)
            })
        ))
    }

    const unCheckedChild = (parent: parentType) => (newItem: childType) : void => {
        setChildren(prevState => (
            prevState.filter((element: childType) => {
                return element !== newItem
            })
        ))
        setParent(prevState => (
            prevState.filter((element: parentType) => {
                return element !== parent
            })
        ))
    };

    const deleteParent = (item: parentType, thisChildren: childType[]) => () : void => {
            setParent(prevState => (
                prevState.filter((element: parentType) => {
                    return element !== item
                })
            ))
            setChildren(prevState => (
                prevState.filter((element: childType) => {
                    return !thisChildren.includes(element)
                })
            ))
            deleteParentProp(item);
            thisChildren.map((child) => {
                return deleteChildProp(child)
            })
        }

    const deleteChild = (item: childType) => () => {
            setChildren((prevState: childType[]) => (
                prevState.filter((element: childType) => {
                    return element !== item
                })
            ))
            deleteChildProp(item)
    }

    return [parent, children, checkedParent, checkedChild, unCheckedParent, unCheckedChild, deleteParent, deleteChild]
}