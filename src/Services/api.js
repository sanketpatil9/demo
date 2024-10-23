import axios from "axios";
// import { axiosGetData } from "./axiosFunctionManager";


// axios library deta exchage sathi use hote //
// 1. axiosGetData         // from backedn to frond get purpose //
// 2. axiosPostData        // for Front to Backend Send purpose
// 3. axiosPutData        // for Edit purpose
// 4. axiosDeleteData     // for Delet purpose 

// Backend developer api sathi lagnari method pass krt asto i.e. get,put,delete,post //

// ****************************************************************************************************************************//
// axios library use krun API INTEGRATION ..//  // he fun copy kraych fkt ani nav change kraych fun ch bsss..! 

export const axiosStudentDataDetails = async () => {              // async ch fun aste he suddha //

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // console.log(response,'This is the respoonse');
        return response;
    } catch (error) {
        console.log(error);
    }
}
//*********************************************************************************************************************************************** */

// axios library use krun API INTEGRATION ..//    // he fun copy kraych fkt ani nav change kraych fun ch bsss..! 

export const axiosUsersDetails = async () => {              // async ch fun aste he suddha //

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(response,'This is the respoonse');
        return response;
    } catch (error) {
        console.log(error);
    }
}
//*********************************************************************************************************************************************** */

export const axiosUsersGetDetails = async (user_id) => {              // async ch fun aste he suddha // 

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);  // ha jo pass kela yala pay load mhnatat //...
        // console.log(response,'This is the respoonse');
        return response;
    } catch (error) {
        console.log(error);
    }
}

//*********************************************************************************************************************************************** */

export const axiosGetCommentData = async (payload) => {              // async ch fun aste he suddha // 

    try {
        console.log(payload, 'payload!@#@');
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload.user_id}/${payload.comments}`);  // /1/comments he dogh payload ahet comments constant rahla pahije pn 1 ha change zala pahije//...
        // console.log(response,'This is the respoonse');
        return response;
    } catch (error) {
        console.log(error);
    }
}

//*********************************************************************************************************************************************** */

export const axiosDeleteUserData = async (payload) => {              // async ch fun aste he suddha // 

    try {
        console.log(payload, 'payload!@#@');
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload}`);  // /1/comments he dogh payload ahet comments constant rahla pahije pn 1 ha change zala pahije//...
        // console.log(response,'This is the respoonse');
        return response;
    } catch (error) {
        console.log(error);
    }
}

// ********************************  For form  ***************************************************************************//




export const axiosUsersPostDeatils = async (payLoad) => {
    try {
        // Log payload to verify what is being sent
        console.log(payLoad, 'Payload being sent to the API');

        // Sending the payload in the body of the POST request
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', payLoad);

        // Log response to inspect the result from the API
        console.log(response, 'This is the response of the form');

        return response;
    } catch (error) {
        // Log error to see any issues with the request
        console.error('API Error:', error);
    }
};










//     const response = await axiosGetData('https://freetestapi.com/api/v1/students');       // ithe await mins backend deta ye prynt wait kr //
//     if (response) {
//         console.log("axiosGetData calling...!");
//         return response;                                                            // return mins jithun call al ya fun la tithe return kr tr call ha profile madhun ala hota //
//     }

// fetch('https://jsonplaceholder.typicode.com/posts')                  // fetch navachi method ya endpoint la call krte ani tithun data fetch krte ../ fetch() navachi he method js chi ahe //
//     .then(response => response.json()),                              // .then means response alyavrr ..//.. response navach var madhe deta yeil json format madhe
//     console.log(response, 'response###')

// .then(json => console.log(json))
// .then(json => {return json})


//************************************************************************************************************************//

// export const axiosUserDataDetails = async () => {              // async ch fun aste he suddha //

//     const response = await axiosGetData('https://freetestapi.com/api/v1/students');       // ithe await mins backend deta ye prynt wait kr //
//     if (response) {
//         console.log("axiosGetData calling...!");
//         return response;                                                            // return mins jithun call al ya fun la tithe return kr tr call ha profile madhun ala hota //
//     }
// }

//**************************************************************************************************************************** */

// export const axiosUserDeleteDetails = async () => {              // async ch fun aste he suddha //

//     const response = await axiosDeleteData('https://freetestapi.com/api/v1/students');       // ithe await mins backend deta ye prynt wait kr //
//     if (response) {
//         console.log("axiosGetData calling...!");
//         return response;                                                            // return mins jithun call al ya fun la tithe return kr tr call ha profile madhun ala hota //
//     }
// }












// backend kadun deta get mins milvaycha / ghyacha asel tr Get method use hote //
// front end kadhun data backend kde pathvaycha asel tr Post method aste //
// edit kraych asel tr Put method aste //
// delet kraych asel tr delete method use hote //
// whole project madhlya api ithe lihilya jatil //
// Promises kuthe use krt - > API integration madhe ..//
// fun call hote ka nahi bgnyasathi fun madhe console takun pahave ..//
// axios he js chi lib ahe tyach alternative fetch() method ahe //
// Axios is a third party JavaScript library. Axios is a promise-based HTTP client easy to use for both browser and node.js.