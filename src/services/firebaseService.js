const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../firebaseConfig");
const axios = require("axios");

const uploadImageToFirebase = async (imageUrl, personaId) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data);
    const imageRef = ref(storage, `personas/${personaId}.jpg`);

    await uploadBytes(imageRef, imageBuffer, { contentType: "image/jpeg" });
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    return null;
  }
};

module.exports = { uploadImageToFirebase };
