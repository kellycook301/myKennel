const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/locations`).then(e => e.json())
        }
    },
    post: {
        value: function (newLocation) {
            return fetch(`${remoteURL}/locations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLocation)
            }).then(e => e.json())
        }
    },
})