exports.returnDataFunc = (data, sql, resultStr) => {
    return new Promise((resolve, reject) => {
        data.db.all(sql
            , data[resultStr+"Param"]
            , (err, result) => {
                if (err) 
                    data["err"] = err
                data[resultStr] = result
                resolve(data);
        });
    });
}

exports.returnOneDataFunc = (data, sql, resultStr) => {
    return new Promise((resolve, reject) => {
        data.db.get(sql
            , data[resultStr+"Param"]
            , (err, result) => {
                if (err) 
                    data["err"] = err
                data[resultStr] = result
                resolve(data);
        });
    });
}

exports.notReturnDataFunc = (data, sql, resultStr) => {
    return new Promise((resolve, reject) => {
        data.db.run(sql
            , data[resultStr+"Param"]
            , function (err) {
                if (err) 
                    data["err"] = err
                if (this.lastID)
                    data[resultStr+"lastID"] = this.lastID;
                resolve(data);
        });
    });
}