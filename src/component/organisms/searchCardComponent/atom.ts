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