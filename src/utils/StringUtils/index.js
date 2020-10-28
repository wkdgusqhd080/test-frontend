const StringUtils = {
    isNull : function(val)
    {
        if (val === null) return true;
        if (val === "NaN") return true;
        const chkStr = val + '';
        if (chkStr.valueOf() === "undefined") return true;
        if (chkStr === null) return true;
        if (chkStr.toString().length === 0) return true;
        return false;
    }, 
    getItems : function(list, typeCd, idx)
    {
        const _typeCd = typeCd
        const _idx = idx
        let reault = [] 
        list.forEach(element => {
            reault.push(element[_typeCd][_idx].value)
        })

        return reault

    },
    getArrayToArray : function(ary)
    {
        let result = []
        ary.forEach(el => {
            el.split(/,/).forEach(atomic => {
                result.push(atomic)
            })
        })

        return result
    },
    onlyUnique : function(val, idx, self)
    {
        return self.indexOf(val) === idx;
    } 
}

export default StringUtils;