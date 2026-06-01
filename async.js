// fake database for testing Async




const fakeDatabase = {
    profile: {id:101, username:'Sabelo', role : ' facilitator'},
    task : [
        {id:1, title : 'DOM'},
        {id:2, title : 'Asynchromous Programming'},
    ],
    Facility: {location:'PTA'}
}

// getting a user with promises
function getUserProfile(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId === fakeDatabase.profile.id) resolve(fakeDatabase.profile);
            else reject (new Error('user not found'))
        }, 5000);
    })
}

// getting tasks with promises

function getTasks(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Math.random()< 0.2) {
                reject(new Error ('fialed to get the tasks'))
            }
            else {
                resolve(fakeDatabase.task)
            }
        },700)
    })
}

/// getting a facility 

function getFacility(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(fakeDatabase.Facility)
        }, 1800)
    })
}

// async/ Await sequential 

// async function getAllData(userId) {
//     try {
//         console.log('The async function is starting')

//         const profile = await getUserProfile(userId);
//         console.log('profile loaded' , profile.username, profile.role);

//         const tasks = await getTasks();
//         console.log("Avaliable Tasks:", tasks.length)

//         const facility = await getFacility();
//         console.log('the facility is :', facility.location)

//         return {profile, tasks, facility}
        
//     } catch (error) {
//         console.log(`failed to get the data: ${error.message}`)
//     }
    
// }

// async concurrent

async function getAllDataParallel(userId){
    try {
        console.log('The async function is starting')

        const profile = await getUserProfile(userId);
        console.log('profile loaded' , profile.username, profile.role);

        const [tasks, facility] = await Promise.all([
            getTasks(),
            getFacility()
        ])
        console.log('task and facility is invocked concurrently')

        return {profile, tasks, facility}
        
    } catch (error) {
        console.log(`failed to get the data: ${error.message}`)
    }
}

async function runAllFunctions() {
 //await getAllData(101)
 await getAllDataParallel(101)
}

runAllFunctions()