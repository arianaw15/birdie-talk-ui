export const posts = [
    {
        id: "1",
        userId: "123456789",
        type:"freeform",
        text: "I saw this beautiful white ibis on my walk today!",
        bird: {
            id: "ibis-001",
            commonName: "White Ibis",
            scientificName: "Eudocimus albus",
            image: "/ibis.jpg"
        },
         location: {
            name: "Goose Creek Resevoir",
            city: "Goose Creek",
            state: "South Carolina",
            country: "USA"
        },
        media: ["/ibis.jpg"],
        time: "2024-06-01T14:30:00Z"
    },
    {
        id: "2",
        type:"sighting",
        userId: "123456781",
        bird: {
            id: "heron-001",
            commonName: "Tricolored Heron",
            scientificName: "Egretta tricolor",
            image: "/heron.jpg"
        },
        location: {
            name: "Goose Creek Resevoir",
            city: "Goose Creek",
            state: "South Carolina",
            country: "USA"
        },
        media: [],
    },
    {
        id: "3",
        type:"sighting",
        userId: "123456782",
        bird: {
            id: "heron-001",
            commonName: "Tricolored Heron",
            scientificName: "Egretta tricolor",
            image: "/heron.jpg"
        },
        location: {
            name: "Goose Creek Resevoir",
            city: "Goose Creek",
            state: "South Carolina",
            country: "USA"
        },
        media: [],
    },
    {
        id: "4",
        type:"sighting",
        userId: "123456789",
        bird: {
            id: "heron-001",
            commonName: "Tricolored Heron",
            scientificName: "Egretta tricolor",
            image: "/heron.jpg"
        },
        location: {
            name: "Goose Creek Resevoir",
            city: "Goose Creek",
            state: "South Carolina",
            country: "USA"
        },
        media: [],
    }
]