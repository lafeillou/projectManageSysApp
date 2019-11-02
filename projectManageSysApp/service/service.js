// #ifdef APP-PLUS
export const DB_NAME = 'db';
// 待复制的数据库文件名
export const dbFileName = 'local.db'
const tableSql = [
    'create table if not exists t_investigation("id" INT(11) PRIMARY KEY,"title" VARCHAR(128),"value" INT(8),"type" VARCHAR(64),"typeId" VARCHAR(11))',
    'create table if not exists t_investigation_id("id" VARCHAR(16) PRIMARY KEY,"title" VARCHAR(128), "parentId" VARCHAR(16))',
]
export function initTable() {
    tableSql.forEach(function (sql) {
        plus.sqlite.executeSql({
            name: DB_NAME,
            sql,
            success: function(e){
                console.log('initTable success!');
            },
            fail: function(e){
                console.log('initTable failed: '+JSON.stringify(e));
            }
        });
    })
}

export function addRow(values, tableName = 't_investigation') {
    plus.sqlite.executeSql({
        name: DB_NAME,
        sql: `insert into ${tableName} values(null, '收押罪犯是否符合规定条件、范围',null , '收监检察', 1)`,
        success: function(e){
            console.log('add row success!');
        },
        fail: function(e){
            console.log('add row failed: '+JSON.stringify(e));
        }
    });
}

export function clearTable(tableName) {
    if(!tableName) return
    plus.sqlite.executeSql({
        name: DB_NAME,
        sql: `DELETE FROM ${tableName}`,
        success: function(e){
            console.log(`clear ${tableName} success`);
        },
        fail: function(e){
            console.log('add row failed: '+JSON.stringify(e));
        }
    });
}

export function deleteTables(tableNames = []) {
    tablenames.forEach(function (tableName) {
        plus.sqlite.executeSql({
            name: DB_NAME,
            sql: `DROP TABLE ${tableName}`,
            success: function(e){
                console.log(`deleteTable ${tableName} success`);
            },
            fail: function(e){
                console.log('add row failed: '+JSON.stringify(e));
            }
        });
    })
}

/**
 * 通用查询接口
 * @param tableName 表名
 * @param params 条件对象  如 {deep: 2,parentId: 20} 表示查询 tableName 表中 deep字段为2，且parentId 为20的 数据行
 * @since 2019/11/02
 * @returns {Promise<unknown>}
 */
export function select(tableName, params){
    if(!tableName) return
    return new Promise((resolve, reject) => {
        let sql = `select * from ${tableName} `
        let condition = ''
        if(params) {
            for(let key in params){
                condition += ` ${key} = '${params[key]}' and`
            }
        }
        if(condition) {
            sql = sql + 'where' + condition
            sql = sql.substr(0, sql.length-3)
        }
        plus.sqlite.selectSql({
            name: DB_NAME,
            sql,
            success: function(data){
                resolve(data)
            },
            fail: function(e){
                console.log('selectSql failed: '+JSON.stringify(e));
                reject(e)
            }
        });
    })
}

export function copyDataBase() {
    let desDir = null
    plus.io.requestFileSystem( plus.io.PRIVATE_DOC, function( fs ) {
        // 可通过fs进行文件操作
        console.log( "File system name: " + fs.name );
        // 通过fs.root获取DirectoryEntry对象进行操作
        desDir = fs.root
        const directoryReader = fs.root.createReader();
        directoryReader.readEntries( function( entries ){
            entries.forEach(function (item) {
                console.log('_doc下面有如下文件：' ,item.name );
                if(item.name = dbFileName) {
                    item.remove( function () {
                        console.log( `删除 已经存在的 ${dbFileName} 成功`);
                    })
                }
            })
        }, function ( e ) {
            console.log( "Read entries failed: " + e.message );
        } );
    }, function ( e ) {
        console.log( "Request file system failed: " + e.message );
    } );
    plus.io.requestFileSystem( plus.io.PRIVATE_WWW, function( fs ) {
        // 可通过fs进行文件操作
        console.log( "File system name: " + fs.name );
        // 通过fs.root获取DirectoryEntry对象进行操作
        const directoryReader = fs.root.createReader();
        directoryReader.readEntries( function( entries ){
            entries.forEach(function (item) {
                console.log('_www下面有如下文件：' ,item.name );
                if(item.name === 'static') {
                    /*item.getDirectory( "newDir", {create:false,exclusive:false}, function( dir ){
                        console.log("Directory Entry Name: " + dir.name);
                    }, function () {
                        console.( e.message );
                    } );*/
                    console.log('static full path：' ,item.fullPath );
                    item.createReader().readEntries(function (arr) {
                        arr.forEach(function (obj) {
                            console.log('static下面有：' ,obj.name );
                            if(obj.name === dbFileName) {
                                obj.copyTo( desDir, dbFileName, function () {
                                    console.log('复制数据成功')
                                }, function (e) {
                                    console.log('复制数据失败', e.message)
                                });
                            }
                        })
                    });
                }
            })
        }, function ( e ) {
            console.log( "Read entries failed: " + e.message );
        } );
    }, function ( e ) {
        console.log( "Request file system failed: " + e.message );
    } );
}
// #endif