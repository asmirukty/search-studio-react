import {atom} from "recoil";

export const placeOpenState = atom<boolean>({
    key: "placeOpen",
    default: false,
});

export const prefectureCityState = atom<{name: string, id: string}[]|any[]>({
    key: "prefectureCity",
    default: [],
});

export const lineStationState = atom<{name: string, id: string}[]|any[]>({
    key: "lineStation",
    default: [],
});

export const prefectureCityChipState = atom<{name: string, id: string}[]|any[]>({
    key: "prefectureCityChip",
    default: [],
});

export const lineStationChipState = atom<{name: string, id: string}[]|any[]>({
    key: "lineStationChip",
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

export const minAreaState = atom<string|null>({
    key: "minArea",
    default: null,
});

export const maxAreaState = atom<string|null>({
    key: "maxArea",
    default: null,
});

export const minPeopleState = atom<string|null>({
    key: "minPeople",
    default: null,
});

export const maxPeopleState = atom<string|null>({
    key: "maxPeople",
    default: null,
});

export const areaChipState = atom<{min: string|null, max: string|null}>({
    key: "areaChip",
    default: {min: null, max: null},
});

export const peopleChipState = atom<{min: string|null, max: string|null}>({
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

export const detailOpenState = atom<boolean>({
    key: "detailOpen",
    default: false,
});

export const fromStationState = atom<string|null>({
    key: "fromStation",
    default: null,
});

export const minPriceState = atom<string|null>({
    key: "minPrice",
    default: null,
});

export const maxPriceState = atom<string|null>({
    key: "maxPrice",
    default: null,
});

export const minMirrorState = atom<string|null>({
    key: "minMirror",
    default: null,
});

export const maxMirrorState = atom<string|null>({
    key: "maxMirror",
    default: null,
});

export const detailItemState = atom<string[]|any[]>({
    key: "detailItem",
    default: [],
});

export const fromStationChipState = atom<string|null>({
    key: "fromStationChip",
    default: null,
});

export const priceChipState = atom<{min: string|null, max: string|null}>({
    key: "priceChip",
    default: {min: null, max: null},
});

export const mirrorChipState = atom<{min: string|null, max: string|null}>({
    key: "mirrorChip",
    default: {min: null, max: null},
});

export const detailItemChipState = atom<string[]|any[]>({
    key: "detailItemChip",
    default: [],
});
