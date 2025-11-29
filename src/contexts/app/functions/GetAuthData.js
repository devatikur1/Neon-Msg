import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../auth/firebaseConfig";

export default async function GetAuthData({ coll = "userData", documentID }) {
  try {
    const docSnap = await getDoc(doc(firestore, coll, documentID));

    if (docSnap.exists()) {
      return {
        id: documentID,
        ...docSnap.data(),
      };
    } else {
      return {};
    }
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    return {};
  }
}
