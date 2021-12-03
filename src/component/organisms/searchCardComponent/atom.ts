import {atom} from "recoil";

export const placeOpenState = atom<boolean>({
    key: "placeOpen",
    default: false,
});

export const prefectureCityState = atom<{name: string, id: string}[]|any[]>({
    key: "prefectureCity",
    default: [],
});

export const prefectureChipState = atom<{name: string, id: string}[]|any[]>({
    key: "prefectureChip",
    default: [],
});

export const cityChipState = atom<{name: string, id: string}[]|any[]>({
    key: "cityChip",
    default: [],
});

export const lineStationState = atom<{name: string, id: string}[]|any[]>({
    key: "lineStation",
    default: [],
});
export const lineChipState = atom<{name: string, id: string}[]|any[]>({
    key: "lineChip",
    default: [],
});

export const stationChipState = atom<{name: string, id: string}[]|any[]>({
    key: "stationChip",
    default: [],
});

export const studioNameState = atom<string|null>({
    key: "studioName",
    default: null,
});

export const spaceOpenState = atom<boolean>({
    key: "spaceOpen",
    default: false,
});

export const minAreaState = atom<number|null>({
    key: "minArea",
    default: null,
});

export const maxAreaState = atom<number|null>({
    key: "maxArea",
    default: null,
});

export const minPeopleState = atom<number|null>({
    key: "minPeople",
    default: null,
});

export const maxPeopleState = atom<number|null>({
    key: "maxPeople",
    default: null,
});

export const areaChipState = atom<{min: number|null, max: number|null}>({
    key: "areaChip",
    default: {min: null, max: null},
});

export const peopleChipState = atom<{min: number|null, max: number|null}>({
    key: "peopleChip",
    default: {min: null, max: null},
});

export const dateOpenState = atom<boolean>({
    key: "dateOpen",
    default: false,
});

export const addDateOpenState = atom<boolean[]>({
    key: "addDateOpen",
    default: [true],
});

export const dateState = atom<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>({
    key: "date",
    default: [],
});

export const dateChipState = atom<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>({
    key: "dateChip",
    default: [],
});

export const dateMatchState = atom<boolean>({
    key: "dateMatch",
    default: false,
});

export const detailOpenState = atom<boolean>({
    key: "detailOpen",
    default: false,
});

export const fromStationState = atom<number|null>({
    key: "fromStation",
    default: null,
});

export const minPriceState = atom<number|null>({
    key: "minPrice",
    default: null,
});

export const maxPriceState = atom<number|null>({
    key: "maxPrice",
    default: null,
});

export const minMirrorState = atom<number|null>({
    key: "minMirror",
    default: null,
});

export const maxMirrorState = atom<number|null>({
    key: "maxMirror",
    default: null,
});

export const detailItemState = atom<string[]|any[]>({
    key: "detailItem",
    default: [],
});

export const fromStationChipState = atom<number|null>({
    key: "fromStationChip",
    default: null,
});

export const priceChipState = atom<{min: number|null, max: number|null}>({
    key: "priceChip",
    default: {min: null, max: null},
});

export const mirrorChipState = atom<{min: number|null, max: number|null}>({
    key: "mirrorChip",
    default: {min: null, max: null},
});

export const detailItemChipState = atom<string[]|any[]>({
    key: "detailItemChip",
    default: [],
});
