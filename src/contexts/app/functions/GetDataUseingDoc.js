import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../auth/firebaseConfig";

export async function SetAuthData({ documentID, data }) {
  try {
    if (!documentID || !data) {
      console.error("⚠️ Missing parameters in SetDataOnAuthId");
      return false;
    }

    const docRef = doc(firestore, "userData", documentID);

    await setDoc(docRef, data);

    return {
      status: true,
      data: {
        id: documentID,
        ...data,
      },
    };
  } catch (error) {
    console.error("🔥 Firestore error in SetDataOnAuthId:", error);
    return { status: false, error: error.message };
  }
}
