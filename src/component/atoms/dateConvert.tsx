export default function DateConvert(props: any) {
        if (new Date(props).getDay() === 1) {
        return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(月)`
        }
        else if (new Date(props).getDay() === 2) {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(火)`
        }
        else if (new Date(props).getDay() === 3) {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(水)`
        }
        else if (new Date(props).getDay() === 4) {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(木)`
        }
        else if (new Date(props).getDay() === 5) {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(金)`
        }
        else if (new Date(props).getDay() === 6) {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(土)`
        }
        else {
            return `${ new Date(props).getMonth()+1 }/${ new Date(props).getDate() }(日)`
        }
}