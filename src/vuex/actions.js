export const demo=(store,payload)=>{//
    return new Promise(function(resolve, reject) {
        store.commit('demo',payload);
        resolve("ok");
    })
}