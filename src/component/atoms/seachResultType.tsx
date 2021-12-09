interface Prefecture {
    id: string,
    name: string,
}

let initialPrefecture: Prefecture = {
    id: '',
    name: '',
}

interface City {
    id: string,
    name: string,
}

let initialCity: City = {
    id: '',
    name: '',
}

interface Line {
    id: string,
    name: string,
}

let initialLine: Line = {
    id: '',
    name: '',
}

interface Station {
    id: string,
    name: string,
}

let initialStation: Station= {
    id: '',
    name: '',
}

interface Exit {
    id: string,
    name: string,
}

let initialExit: Exit = {
    id: '',
    name: '',
}

interface Address {
    address: string,
    prefecture: Prefecture,
    city: City,
    line: Line,
    station: Station,
    exit: Exit,
    minutes_from_station: number,
}

let initialAddress: Address = {
    address: '',
    prefecture: initialPrefecture,
    city: initialCity,
    line: initialLine,
    station: initialStation,
    exit: initialExit,
    minutes_from_station: 0,
}

interface StudioFacility {
    name: string,
    count: number,
    price: number,
}

let initialStudioFacility: StudioFacility = {
    name: '',
    count: 0,
    price: 0,
}

interface RoomImg {
    name: string,
    description: string,
    path :string,
}

let initialRoomImg: RoomImg = {
    name: '',
    description: '',
    path: '',
}

interface RoomFacility {
    name: string,
    count: number,
    price: number,
}

let initialRoomFacility: RoomFacility = {
    name: '',
    count: 0,
    price: 0,
}

interface Amenity {
    name: string,
    count: number,
    price: number,
}

let initialAmenity: Amenity = {
    name: '',
    count: 0,
    price: 0,
}

interface Slot {
    workload: number,
    time_begin: number,
    time_end: number,
    price: number,
    count: number,
}

let initialSlot: Slot = {
    workload: 0,
    time_begin: 0,
    time_end: 0,
    price: 0,
    count: 0,
}

interface Room {
    room_name: string,
    floor_area: number,
    mirror_length: number,
    min_people: number,
    max_people: number,
    room_img: RoomImg[],
    free_cancel: boolean,
    reservation: string[],
    room_facilities: RoomFacility[],
    amenities: Amenity[],
    floor_material: string,
    slots: Slot[],
    min_reserve_minutes: number,
    reserve_url: string,
}

let initialRoom: Room = {
    room_name: '',
    floor_area: 0,
    mirror_length: 0,
    min_people: 0,
    max_people: 0,
    room_img: [
        initialRoomImg,
    ],
    free_cancel: false,
    reservation: [],
    room_facilities: [
        initialRoomFacility,
    ],
    amenities: [
        initialAmenity,
    ],
    floor_material: '',
    slots: [
        initialSlot,
    ],
    min_reserve_minutes: 0,
    reserve_url: '',
}

export interface Studio {
    studio_id: string,
    studio_name: string,
    address: Address,
    studio_facilities: StudioFacility[],
    room_count: number,
    rooms: Room[]
}

let initialStudio: Studio = {
    studio_id: '',
    studio_name: '',
    address: initialAddress,
    studio_facilities: [
        initialStudioFacility,
    ],
    room_count: 0,
    rooms: [
        initialRoom
    ]
}

export interface SearchResult {
    total_pages: number,
    studios: Studio[],
}

export let initialSearchResult: SearchResult = {
    total_pages: 0,
    studios: [
        initialStudio,
    ]
}