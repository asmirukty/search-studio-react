import SearchChip from "../atoms/searchChip";

interface PlaceSearchChipProps {
    parentItem: {id: string, name: string},
    childItems: {id: string, name: string}[],
    parent: any[],
    children: any[],
    deleteParent: (value: any, children: any[]) => () => void;
    deleteChild: (value: any) => () => void;

}
export default function PlaceSearchChip(props: PlaceSearchChipProps) {
    const {parentItem, parent, childItems, children, deleteParent, deleteChild} = props;

    return (
        <div style={{display: 'flex'}}>
            {
                parent.includes(parentItem) ?
                    <SearchChip key={parentItem.id} label={parentItem.name}
                                onDelete={deleteParent(parentItem, childItems)}/>
                    :
                    childItems.map((childItem) =>
                        children.includes(childItem) &&
                        <SearchChip key={childItem.id} label={childItem.name} onDelete={deleteChild(childItem)}/>
                    )

            }
        </div>
    )
}