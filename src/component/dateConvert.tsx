function dayConvert(day: number) {
    if (day === 1) {
        return '月'
    } else if (day === 2) {
        return '火'
    } else if (day === 3) {
        return '水'
    } else if (day === 4) {
        return '木'
    } else if (day === 5) {
        return '金'
    } else if (day === 6) {
        return '土'
    } else {
        return '日'
    }
}

export default function DateConvert(props: any) {
    return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(${dayConvert(new Date(props).getDay())})`
}