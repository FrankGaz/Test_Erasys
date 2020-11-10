import profilesAPI from "./api/profilesAPI";

searchAPIinfo = async => {
    const response = await profilesAPI.get('/search/photos');
    console(response);
    };
  

 export default searchAPIinfo;