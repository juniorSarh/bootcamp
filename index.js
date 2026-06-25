const studentDatabase = [
    {id: 1, firstName: 'Zodwa', lastName: 'Ntlahla', email: 'ntombizodwantlahla53@gmail.com', course: 'ICT BA', age: 23},
    {id: 2, firstName: 'Lelona', lastName: 'Mdilika', email: 'lelonamdilika@gmail.com', course: 'Business Management', age: 22},
    {id: 3, firstName: 'Zusakhe', lastName: 'Qina', email: 'zuzuqina@gmail.com', course: 'Hospitality', age: 18},
    {id: 4, firstName: 'Nokwe', lastName: 'Menyuka', email: 'nokwethembamenyuka@gmail.com', course: 'ICT BA', age: 24},
    {id: 5, firstName: 'Asemahle', lastName: 'Madlebe', email: 'asemadlebe1@gmail.com', course: 'BIM', age: 23}
];

function demoSync() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}
demoSync();

function displayStudents() {
    setTimeout(() => {
        console.log("Student Records:", studentDatabase);
    }, 3000);
}
displayStudents();