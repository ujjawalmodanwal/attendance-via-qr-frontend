# QR based attendance marking system for our institute library    

**Tech stack used :** Postgresql, NodeJs, ExpressJs, React JS, Postman       
**Frontend Deployment:** Netlify     
**Backend and Database Deployment:** Render     


This is a software as a solution project done by me. Description as per STAR approach is as follows:  

**Situation:** At our institute library entry/exit time of the students was marked by asking them to write on a register notebook with their "name", "department", "student ID", "class". This was very inconsistent way with no data record integrity as not all student who are entering or exiting the library used to provide their details. I obsereved this situation and thought to create a QR based entry/exit time marking system where the admin will generate a QR code and every student just have to scan that QR code on entering and exiting which was very quick.

**Task:** Create a website with register/login features. Each users go through the process of authentication and authorization. Admin (only) can generate old/new QR code. Students can scan the same QR code for marking entry and exit time. Each student can see only their own data. Only admin can see the data of all the students. Users can update their profile details.

**Action:** I designed the relational database with Postgresql framework. Understood what api endpoints are required to interface frontend with backend. Created frontend UI using React JS library. Backend using Node JS library under the framework of Express JS module. 

**Result:** I worked on this project alone and it took me 15 days to release the first version of fully working website. Though some additional features are still in my mind which I will be implementing in coming these days. Probably, I will try to pitch this improvisation to library incharge to get it implemented.                   

Link to backend server codebase: [link](https://github.com/ujjawalmodanwal/attendance-via-qr-backend)                  
Link to deployed version of the website: [link](https://deft-bavarois-f36503.netlify.app/)

**Crdentials for testing the website:**
- For dummy admin:      
email:ujjawalmodamwal352@outlook.com       
password:ujjawal@library       

- For dummy student:       
email: pavitra@prabhakar.com       
password: pavitra@library
