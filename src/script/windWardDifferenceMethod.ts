export const windWardDifferenceMethod = () => {
    const log = [] as number[][]
    const span = 0.2;
    const Cran = 0.2;
    log.push([1, 1])
    for (let passed = 0; passed < 1.0; passed += span) {
        const preLog = log[log.length - 1];
        const nextLog = new Array(preLog.length + 1).fill(0).map((_, idx) => {
            const preIdxlog = preLog[idx - 1] ?? 0;
            const curIdxlog = preLog[idx] ?? 0
            return curIdxlog - Cran * (curIdxlog - preIdxlog)
        })
        log.push(nextLog)
    }

    return log

}

export const fillWind = (target: number[][], from: number, to: number) => {
    return target.map(tar => new Array(to - from + 1).fill(0).map((_, idx) => {
        return tar[from + idx] ? tar[from + idx] : 0;
    }))
}