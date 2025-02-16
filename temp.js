const f = (int) =>{
    return int + 273.15
}

const trance = (arrtem, fun) =>{
    let ans = []
    for (let i of arrtem) {
        ans.push(fun(i))
    }
    return ans
}