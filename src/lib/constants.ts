export type Constants = {
    [s in Staff]: {
        title: string
        linkedIn: string
        profileUrl: string
        image: string
    }
}
export const constants: Constants = {
    "Neil Chaudhuri (He/Him)": {
        title: "President",
        profileUrl: "https://www.linkedin.com/in/neil-chaudhuri/",
        linkedIn: "https://www.linkedin.com/in/neil-chaudhuri/",
        image: "/img/staff/president.png"
    }
}

export type Staff = "Neil Chaudhuri (He/Him)"





