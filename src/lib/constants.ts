export type Constants = {
    [s in Staff]: {
        name: string
        title: string
        linkedIn: string
        twitter: string
        profileUrl: string
        image: string
    }
}
export const constants: Constants = {
    "Neil Chaudhuri": {
        name: "Neil Chaudhuri",
        title: "President",
        profileUrl: "https://twitter.com/RealNeilC",
        linkedIn: "https://www.linkedin.com/in/neil-chaudhuri/",
        twitter: "https://twitter.com/RealNeilC",
        image: "/img/staff/president.png"
    }
}

export type Staff = "Neil Chaudhuri"





