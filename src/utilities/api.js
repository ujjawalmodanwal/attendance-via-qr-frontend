import axios from "axios";

const registerUser = (payload, checkLocalStoreage, {navigateToDashboard})=>{
    payload = JSON.stringify(payload);
    axios.post('https://attendance-via-qr-backend.onrender.com/user/register', payload, 
        {headers: {
            "Content-Type": "application/json",
        }
    }).then((res)=>{
        const jwtToken = res.data.accessToken;
        localStorage.setItem("jwtToken", 'Bearer '+jwtToken);
        checkLocalStoreage();
        navigateToDashboard();
    }, (err)=>{
        window.alert(err);
    })
}

const loginUser = (payload, checkLocalStoreage, {navigateToDashboard})=>{
    payload = JSON.stringify(payload);
    axios.post('https://attendance-via-qr-backend.onrender.com/user/login', payload,
        {headers:{
            "Content-Type": "application/json",
        }
    }).then((res)=>{
        console.log(res.data);
        const jwtToken = res.data.accessToken;
        const isadmin = res.data.isadmin
        if(jwtToken){
            localStorage.setItem("jwtToken", 'Bearer '+jwtToken);
            localStorage.setItem("isadmin", isadmin);
            checkLocalStoreage();
            navigateToDashboard();
        }
        else{
            window.alert('Token not received!')
        }
    }, (err)=>{
        window.alert(err);
    })
}

const getUserDetails = (updateUser)=>{
    const jwtToken = localStorage.getItem("jwtToken");
    axios.get('https://attendance-via-qr-backend.onrender.com/user/details', {
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then((res)=>{
            updateUser(res.data);
        }, (err)=>{
            window.alert(err);
    })
}

const updateUserData = (payload)=>{
    payload = JSON.stringify(payload);
    const jwtToken = localStorage.getItem("jwtToken");
    axios.put("https://attendance-via-qr-backend.onrender.com/user/update", payload, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then((res)=>{
        window.alert(res);
    }, (err)=>{
        window.alert(err);
    })
}

const getUserAttendance = (date, updateAttendanceData) =>{
    const jwtToken = localStorage.getItem("jwtToken");
    axios.get(`https://attendance-via-qr-backend.onrender.com/user/attendance/`, {
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
        }
    }, (err)=>{
        window.alert(err);
    })
}


const getQRString = (newQR, getString)=>{
    const jwtToken = localStorage.getItem("jwtToken");
    axios.get(`https://attendance-via-qr-backend.onrender.com/user/getQRCode/`, {
        params:{
            "newQR": newQR
        },
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then(res=>{
        getString(res.data);
    }, err=>{
        window.alert(err);
    })
}

const markAttendance = (payload)=>{
    payload = JSON.stringify(payload);
    const jwtToken = localStorage.getItem("jwtToken");
    axios.post('https://attendance-via-qr-backend.onrender.com/user/markAttendance', payload,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":jwtToken,
        }
    }).then(res=>{
        window.alert(res.data);
    }, err=>{
        window.alert(err);
    })
}

const apis = {
    registerUser, loginUser, getUserDetails, updateUserData, getUserAttendance, getQRString, markAttendance
};
export default apis;
