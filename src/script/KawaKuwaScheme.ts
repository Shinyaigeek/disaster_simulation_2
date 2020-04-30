import { judger, convertKeyLabeltoIdx } from "./centerDifferenceMethod";

export const KawaKuwa = () => {
    const Cran = 0.2;
    const span = 0.2;

    const log = [{
        "i": 1,
        "i + 1": 1,
    }] as any[];

    for (let passed = 0 + span; passed <= 1; passed += span) {
        const preLog = log[log.length - 1];
        const preLogKeys = Object.keys(preLog)
        preLogKeys.unshift(`i + ${convertKeyLabeltoIdx(preLogKeys[0]) - 1}`)
        preLogKeys.unshift(`i + ${convertKeyLabeltoIdx(preLogKeys[0]) - 1}`)
        preLogKeys.push(`i + ${convertKeyLabeltoIdx(preLogKeys[preLogKeys.length - 1]) + 1}`)
        preLogKeys.push(`i + ${convertKeyLabeltoIdx(preLogKeys[preLogKeys.length - 1]) + 1}`)

        const nextLog = {} as any;
        preLogKeys.forEach((key, idx) => {
            const one = preLog[judger("i + " + (convertKeyLabeltoIdx(key) - 2))] ?? 0;
            const two = preLog[judger("i + " + (convertKeyLabeltoIdx(key) - 1))] ?? 0;
            const three = preLog[judger("i + " + (convertKeyLabeltoIdx(key)))] ?? 0;
            const four = preLog[judger("i + " + (convertKeyLabeltoIdx(key) + 1))] ?? 0;
            const five = preLog[judger("i + " + (convertKeyLabeltoIdx(key) + 2))] ?? 0;
            console.log(key, one, two, three, four, five)

            nextLog[key] = three - (Cran / 6) * (five - 2 * four + 9 * three - 10 * two + 2 * one)
        })

        log.push(nextLog)
    }

    return log

}

export const fill = (target: any[], from: number, to: number) => {
    return target.map(tar => new Array(to - from + 1).fill(0).map((_, idx) => {
        return tar[judger(`i + ${from + idx}`)] ? tar[judger(`i + ${from + idx}`)] : 0;
    }))
}