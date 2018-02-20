import firebase from './../firebase';

const getStorageRef = firebase.storage().ref();

const userProfilePhotosRef = fileName => getStorageRef.child(`user/profilePhotos/${fileName}`);

const addProfilePhotoToStorage = (userId, file) => {
    // TODO: Validate file.name has valid extension, .jpg .png only?
    const fileExtension = file.name.split('.')[1];
    const fileName = `${userId}.${fileExtension}`;
    return userProfilePhotosRef(fileName).put(file);
};

export default {
    addProfilePhotoToStorage,
};
