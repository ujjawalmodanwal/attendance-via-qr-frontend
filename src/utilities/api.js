import axios from "axios";

const registerUser = (payload, checkLocalStoreage)=>{
    payload = JSON.stringify(payload);
    axios.post('/user/register', payload, 
        {headers: {
            "Content-Type": "application/json",
        }
    
    }).then((res)=>{
        const jwtToken = res.data.accessToken;
        localStorage.setItem("jwtToken", 'Bearer '+jwtToken);
        checkLocalStoreage();
        window.location.replace("/Dashboard");
    }, (err)=>{
        console.log(err);
    })
}

const loginUser = (payload, checkLocalStoreage)=>{
    payload = JSON.stringify(payload);
    axios.post('user/login', payload,
        {headers:{
            "Content-Type": "application/json",
        }
    }).then((res)=>{
        const jwtToken = res.data.accessToken;
        if(jwtToken){
            localStorage.setItem("jwtToken", 'Bearer '+jwtToken);
            checkLocalStoreage();
            window.location.replace("/Dashboard");
        }
        else{
            console.log('Token not received!')
        }
    }, (err)=>{
        console.log(err);
    })
}

const getUserDetails = (updateUser)=>{
    const jwtToken = localStorage.getItem("jwtToken");
    axios.get('/user/details', {
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then((res)=>{
            updateUser(res.data);
        }, (err)=>{
            console.log(err);
    })
}

const updateUserData = (payload)=>{
    payload = JSON.stringify(payload);
    const jwtToken = localStorage.getItem("jwtToken");
    axios.put("/user/update", payload, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then((res)=>{
        console.log(res);
    }, (err)=>{
        console.log(err);
    })
}

const getUserAttendance = (date, updateAttendanceData) =>{
    const jwtToken = localStorage.getItem("jwtToken");
    axios.get(`/user/attendance/`, {
        params:{
            "requestedDate":date
        },
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then((res)=>{
        if(res.data!=='Not found'){
            updateAttendanceData(res.data);
        }
        else{
            updateAttendanceData([]);
            console.log(res.data);
        }
    }, (err)=>{
        console.log(err);
    })
}

const apis = {
    registerUser, loginUser, getUserDetails, updateUserData, getUserAttendance
};
export default apis;