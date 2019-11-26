export async function updateApk(apkName) {
    const url=`_doc/${apkName}`;
    const path= plus.io.convertLocalFileSystemURL(url);
    console.log('apk的路径path为',path)
    plus.runtime.install(path, {}, {}, function(error){
        uni.showToast({
            title: '安装失败',
            mask: false,
            duration: 1500
        });
    })
}

export function showConfirmUpdate() {
    uni.showModal({
        title: '提示',
        content: '检测到新的应用版本，是否更新？',
        success: function (res) {
            if (res.confirm) {
                updateApk(`101.apk`)
            } else if (res.cancel) {
                console.log('用户点击取消');
            }
        }
    });
}