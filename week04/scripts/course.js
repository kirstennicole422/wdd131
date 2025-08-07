let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
};


aCourse.sections = { section: 1, enrolled: 30, instructor: "Jane Smith" };


function setName(name) {
    aCourse.title = name;
    return;
}

function setCode(code) {
    aCourse.code = code;
    return;
}

function getSection(sectionId) {
    if (aCourse.sections.section = "sectionId") {
        console.log(aCourse.sections.section)
    }
}