export function sortDate (date: {date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]) {
    const newDate: any[] = [];
    date.map((item) => newDate.push(item))

    if (newDate.length > 1) {
        newDate.sort(function (a, b) {
            if (a.date && b.date) {
                if (a.date.getFullYear() > b.date.getFullYear()) {
                    return 1
                }
                if (a.date.getFullYear() < b.date.getFullYear()) {
                    return -1
                }
                // yearが同じの時
                if (a.date.getMonth() > b.date.getMonth()) {
                    return 1
                }
                if (a.date.getMonth() < b.date.getMonth()) {
                    return -1
                }
                // monthが同じの時
                if (a.date.getDate() > b.date.getDate()) {
                    return 1
                }
                if (a.date.getDate() < b.date.getDate()) {
                    return -1
                }
                // dateが同じの時
                if (a.startTime && (!b.startTime || (b.startTime && a.startTime > b.startTime))) {
                    return 1
                }
                if (b.startTime && (!a.startTime ||(a.startTime && a.startTime < b.startTime))) {
                    return -1
                }
                //startTimeが同じ時
                if (b.endTime && (!a.endTime || (a.endTime && a.endTime < b.endTime))) {
                    return 1
                }
                if (a.endTime && (!b.endTime || (b.endTime && a.endTime < b.endTime))) {
                    return -1
                }
            }
            return 0
        })
    }

    return newDate
}
