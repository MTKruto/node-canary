export function constructPollOption(option, results) {
    return {
        text: option.text,
        voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
    };
}
