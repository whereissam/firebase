db.collection('coffee').get().then((snapshot) => {
    console.log(snapshot.docs)
})