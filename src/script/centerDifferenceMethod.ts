export const convertKeyLabeltoIdx = (label: string) => {
    if (label === "i") {
        return 0
    }
    return Number(label.split(" + ")[1])
}

export const judger = (target:string) => {
    if(target === "i + 0") {
        return "i"
    }
    return target
}

export const centerDifferenceMethod = () => {
    const Cran = 0.2;
    const log = [{
        "i": 1,
        "i + 1": 1
    }] as any[]
    const span = 0.2;

    for (let passed = 0 + span; passed <= 1; passed += span) {
        const preLog = log[log.length - 1];
        const preLogKeys = Object.keys(preLog)
        preLogKeys.unshift(`i + ${convertKeyLabeltoIdx(preLogKeys[0]) - 1}`)
        preLogKeys.push(`i + ${convertKeyLabeltoIdx(preLogKeys[preLogKeys.length - 1]) + 1}`)
        const nextLog = {} as any;
        preLogKeys.forEach((key, idx) => {
            const preIdxLog = preLog[judger("i + " + (convertKeyLabeltoIdx(key) - 1))] ?? 0;
            const curIdxLog = preLog[judger("i + " + (convertKeyLabeltoIdx(key)))] ?? 0;
            const nextIdxLog = preLog[judger("i + " + (convertKeyLabeltoIdx(key) + 1))] ?? 0;
            console.log(key, preIdxLog, curIdxLog, nextIdxLog)
            nextLog[key] = curIdxLog - (Cran / 2) * (nextIdxLog - preIdxLog)
        })

        log.push(nextLog)
    }

    return log
}