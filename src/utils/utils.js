import {
    camelCase,
    compact,
    difference,
    isArray,
    isEmpty,
    isFunction,
    isNaN,
    kebabCase,
    omitBy,
    parseInt,
    pick
} from 'lodash'

export function changeKeysToCamelCase(obj) {
    return changeKeysCase(obj, camelCase)
}

export function formatOptionsForEngine(options) {
    const result = {}

    Object.keys(options).forEach((key) => {
        const kebabCaseKey = kebabCase(key)
        result[kebabCaseKey] = `${options[key]}`
    })

    return result
}

export function compactUndefined(arr = []) {
    return arr.filter((item) => {
        return item !== undefined
    })
}

export function changeKeysCase(obj, caseConverter) {
    const result = {}
    if (isEmpty(obj) || !isFunction(caseConverter)) {
        return result
    }

    for (const [k, value] of Object.entries(obj)) {
        const key = caseConverter(k)
        result[key] = value
    }

    return result
}